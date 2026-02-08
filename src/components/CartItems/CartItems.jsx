import React, { useContext } from 'react'
import './CartItems.css'
import { StoreContext } from '../../context/StoreContext'
import remove_icon from '../../assets/remove_icon.png'

const CartItems = () => {
    const { getTotalCartAmount,getTotalCartItems,All_Products, cartItems, removeFromCart } = useContext(StoreContext);
    return (
        <div >
            <div className="CartItems">
                <div className="CartItems_h">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />

                {All_Products.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                        <div className="cart" key={e.id}>
                            <div className="CartItems_cart CartItems_h">
                                <img className="Cart_Image" src={e.image} alt=" " />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="Cart_button">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="Cart_remove" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="remove_icon" />
                            </div>
                            <hr/>
                        </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="Cart_down">
                <div className="Cart_totals">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="Cart_subtotals">
                            <p>Subtotal</p>
                            <p>${getTotalCartItems()}</p>
                        </div>
                        <hr />
                        <div className="Cart_subtotals">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="Cart_subtotals">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CartItems