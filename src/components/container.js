import React from 'react'

import { Item } from './item'

export function Container(props) {
    const productList = props.productList

    return <div className="container">
        <div className="list">
            <Item product={productList[0]} />
            <Item product={productList[1]} />
            <Item product={productList[2]} />
            <Item product={productList[3]} />
            <Item product={productList[4]} />
            <Item product={productList[5]} />
            <Item product={productList[6]} />
            <Item product={productList[7]} />
        </div>
    </div>
}