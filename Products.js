import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import axios from 'axios'

import {Link} from 'react-router-dom'
import Support from './support'

 class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products:[]
        }
    }
    componentDidMount()
    {
    axios.get("http://localhost:3001/product/"+this.props.match.params.category_id)
    .then((response)=>{
        console.log(response.data,"products")
        this.setState({products:response.data})
        console.log(this.state.products);
    })
    .catch((error)=>{
        console.log(error);
        this.setState({error : "Error retreiving Data"})
    })
    }
    
    cart = (event) =>{
      if(localStorage.getItem("email")!=null)
      {
      let email = localStorage.getItem("email");
      let id = event.target.dataset.user;

      let productData = {"email":email,"id":id};
      console.log(productData);
      axios({
        method:'POST',
        headers:{'Content-Type':'application/json'},
        url:"http://localhost:3001/addtocart",
        data:productData
    })
    .then((response)=>{
        if(response.data.result === 'success'){
            alert("Item Added to cart!");
           
        }
        else{
            alert('Some error!');
        }
    })
    .catch((error)=>{
        console.log(error);
    });
      }
      else
      {
        alert("Login to continue!");
      }
    }


    render() {
        const {products} = this.state;


        return (

                     <div className="tab-pane fade in" id="Mobiles">
                       <ul className="aa-product-catg"> 
                         {
                             this.getProducts(products)
                         }
                     
                         </ul> 
                        </div>
        )
    }

    getProducts(products) {
       console.log(products,"qqqq")
            return( products ? products && products.map((single)=>{
                return(
                    <li>
                    <figure>
                      <a class="aa-product-img" href="#"><img src={single.product_image} alt="Samsung S20 img"/></a>
                      <span class="aa-add-card-btn" onClick={this.cart} data-user={single.product_id}><span class="fa fa-shopping-cart"></span>Add To Cart</span>
                        <figcaption>
                        <h4 class="aa-product-title"><a href="#">{single.product_name}</a></h4>
                        <span class="aa-product-price">{single.product_price}</span><span class="aa-product-price"></span>
                      </figcaption>
                    </figure>                        
                    <div class="aa-product-hvr-content">
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
                      <a href="#" data-toggle2="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>                          
                    </div>
                    
                    <span class="aa-badge aa-sale" href="#">SALE!</span>
                  </li>
                )
                
            }) :null
          )
        
    }
}
export default Products