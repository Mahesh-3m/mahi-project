import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import Item from '../components/Item/Item'
import './CSS/StoreCategory.css'

const StoreCategory = (props) => {
    const { All_Products } = useContext(StoreContext);
    return (
        <div>
            <div className="banners">
                <img src={props.banner} alt="images" />
            </div>
            
            <div>
                <p>
                    <span>Showing 1-10 </span> out of 30 products
                </p>
                <img src={props.category} alt="images" />
            </div>
            {/*<div>
                {All_Products
                    .filter(item => item.category === props.category)
                    .map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))}
            </div>*/}

            <div className="cloths">
                {All_Products.map((item,i)=>{
                 if (props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                 }
                 else{
                    return null;
                 }
                })}
            </div>
            <div className="More">
                <button>Show More</button>
            </div>
        </div>
    )
}
export default StoreCategory