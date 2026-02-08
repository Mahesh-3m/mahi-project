import React from 'react'
import {useContext} from 'react'
import {StoreContext} from '../../context/StoreContext'
import './ProductDisplay.css'
const ProductDisplay =(props)=>{
    const {product}=props;
    const {addToCart}=useContext(StoreContext);
    return(
        <div className="product">
            <div className="product-l">
                <img className="product-image" src={product.image} alt="product"/>
            </div>
            <div className="product-r">
                <h1>{product.name}</h1>
                <div>

                </div>
                <div className="product_price">
                    <div className="product_old">
                        ${product.old_price}
                    </div>
                    <div className="product_new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="product_discription">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </div>
                <div className="product_size">
                    <h1>Select Size</h1>
                    <div className="size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>    
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART </button>
                <p className="Product_category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className="Product_category"><span>Tags :</span>Modern, Latest</p>        
            </div>

        </div>
    )
}
export default ProductDisplay
