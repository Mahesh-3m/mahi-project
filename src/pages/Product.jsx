import React,{useContext} from 'react'
import {StoreContext} from '../context/StoreContext'
import {useParams} from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Breadcrum from '../components/Breadcrum/Breadcrum'
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";
import CartItems from "../components/CartItems/CartItems";
const Product=()=>{
    const {All_Products}=useContext(StoreContext);
    const {productId}=useParams();
    const product=All_Products.find((e)=>e.id === Number(productId))
    
    
    return(
        <div>
           <Breadcrum product={product}/> 
           <ProductDisplay product={product}/>
           <RelatedProducts/>
           <CartItems/>
        </div>
    )
}
export default Product