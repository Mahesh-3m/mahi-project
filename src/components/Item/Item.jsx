import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
const Item=(props)=>{
    return(
        <div className="Item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="my pics" /></Link>
            <p>{props.name}</p>
            <div className="Item-h">
                <div className="Item-new">
                    ${props.new_price}
                </div>
                <div className="Item-old">
                    ${props.old_price}
                </div>
            </div>

        </div>
    )
}
export default Item
/*import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, name, image, price }) => {
    return (
        <div className="item">
            <Link to={`/product/${id}`}>
                <img src={image} alt={name} />
            </Link>
            <p>{name}</p>
            <p>₹{price}</p>
        </div>
    )
}

export default Item*/
