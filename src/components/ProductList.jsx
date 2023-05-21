import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { getProductsList } from '../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = () => {

    // const [ products, getProducts ] = useState ([])
    const dispatch = useDispatch()
    const { data: products } = useSelector(state => state.product)
    const isLoading = useSelector(state => state.product.isLoading)
    const error = useSelector(state => state.product.error)

    useEffect(() => {
        try {
            // fetch('https://fakestoreapi.com/products')
            //     .then(data => data.json())
            //     .then(result => getProducts(result))
            dispatch(getProductsList())
        } catch (error) {
            alert('An error occurred while fetching data: ', error)
        }
    }, [dispatch])

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    if (error) {
        return <div>Error: {error}</div>;
      }

    return (
        <div>
            <h3>Show Products</h3>
            <ProductItem data={products} type='1' />
        </div>
    )
}

export default ProductList