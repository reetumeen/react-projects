import React, { Component } from 'react'
import '../assets/css/style.css'
import '../assets/css/bootstrap.css'

import axios from 'axios'

import {Link} from 'react-router-dom'


class Promo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[]
        }
    }
    componentDidMount()
    {
    axios.get("http://localhost:3001/category")
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
    <section id="aa-promo">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="aa-promo-area">
            <div className="row">
              
              <div className="col-md-12 no-padding">
                <div className="aa-promo-right">
                
                  {
                      this.getCategories(products)
                      
                 }
                 {console.log(products,"printing category")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  
        )
    }

    getCategories(products) {
       console.log(products,"qqqq")
            return( products ? products && products.map((single)=>{
                return(
                  <div key={single._id} className="aa-single-promo-right">
                    <Link to={`/products/${single.category_id}`}>
                    <div className="aa-promo-banner">                      
                      <img src={single.category_image}  alt="img"/>                      
                      <div className="aa-prom-content">
                        <span>Exclusive Item</span>
                        <h4>{single.category_name}</h4>                        
                      </div>
                    </div>
                    </Link>
                  </div>
                )
                
            }) :null
          )
        
    }
}

export default Promo