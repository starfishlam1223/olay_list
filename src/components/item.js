import React from 'react'

import { Rating } from './rating'
import { Compare } from './compare'

export function Item(props) {
    const product = props.product;

    return <div className="item">
        <div className="itemImage">
            <img src={product.image} alt={product.title}></img>
        </div>
        <div className="itemInfo">
            <div className="itemTitle">{product.title}</div>
            <div className="itemDesc">{product.desc}</div>
            <Rating score={product.score} count={product.ratingCount} />
            <div className="itemPrice">
                <span className="price">{product.price}</span>
                <span className="desc">&nbsp;建議零售價</span>
            </div>
            <Compare />
        </div>
    </div>
}