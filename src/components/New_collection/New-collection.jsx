import React from 'react'
import './New_collection.css'
import Collection from '../../assets/New_collection'
import Item from '../Item/Item'
const New_collection=()=>{
    return(
        <div className="New">
            <div className="New-h" >
                <h1>New Collectons </h1>
            </div>
            <div className="New-d">
                {Collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div> 


        </div>
    )
}
export default New_collection