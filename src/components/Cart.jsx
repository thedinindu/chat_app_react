import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const Cart = () => {
    const cart = useSelector(state => state.cart)

    return (
        <div>
            <h2>Cart Items</h2>
            <ProductItem data={cart} type='2' />
        </div>
    )
}

export default Cart
