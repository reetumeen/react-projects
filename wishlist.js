import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

import wishlist from '../assets/img/wishlist.jpg'


class Wishlist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products:[]
        }
    }
    componentDidMount()
    {
    axios.get("http://localhost:3001/addtocart")
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
    render() {
        const {products} = this.state;

        return (
            <div>
    <section id="aa-catg-head-banner">
   <img src={wishlist} alt="fashion img"/>
   <div class="aa-catg-head-banner-area">
     <div class="container">
      <div class="aa-catg-head-banner-content">
        <h2>Wishlist Page</h2>
        <ol class="breadcrumb">
          <li><a href="index.html">Home</a></li>                   
          <li class="active">Wishlist</li>
        </ol>
      </div>
     </div>
   </div>
  </section>
  {/* <!-- / catg header banner section --> */}

 {/* <!-- Cart view section --> */}
 <section id="cart-view">
   <div class="container">
     <div class="row">
       <div class="col-md-12">
         <div class="cart-view-area">
           <div class="cart-view-table aa-wishlist-table">
             <form action="">
               <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                             this.getProducts(products)
                         }  
                      </tbody>
                  </table>
                </div>
             </form>             
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
            </div>
        )
    }
    getProducts(products) {
        console.log(products,"qqqq")
             return( products ? products && products.map((single)=>{
                 return(
                    <tr>
                        <td><a class="remove" href="#"><fa class="fa fa-close"></fa></a></td>
                        <td><a href="#"><img src={single.product_image} alt="img"/></a></td>
                        <td><a class="aa-cart-title" href="#">{single.product_name}</a></td>
                        <td>{single.product_price}</td>
                        <td>In Stock</td>
    
                      </tr>   
                 )
                 
             }) :null
           )
         
     }
}
export default Wishlist