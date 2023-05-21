import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add, remove } from '../features/cartSlice';

const ProductItem = ({ data, type }) => {

    const dispatch = useDispatch()

    const addToCart = (item) => {
        dispatch(add(item))
    }

    const removeFromCart = (item) => {
        dispatch(remove(item))
    }

    const product = data.map(item => (
        <div className='col-md-3' style={{ marginBottom: '10px' }}  key={item.id}>
            <Card className='text-center h-100' style={{ width: '15rem'}}>
                <div className='text-center'>
                    <Card.Img variant="top" style={{ height: '130px', width: '100px' }} src={item.image} />
                </div>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                    $ {item.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    {type === '1' ? <Button variant="primary" onClick={() => addToCart(item)}>Add to cart</Button> 
                    : <Button variant="danger" onClick={() => removeFromCart(item.id)} >Remove Item</Button>}
                </Card.Footer>
            </Card>
        </div>
    ))

  return (
    <div className='row'>
        {product}
    </div>
  )
}

export default ProductItem
