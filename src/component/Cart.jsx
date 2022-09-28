import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container">
                    <button className="btn "></button>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title}
                                height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="lead fw-bold">
                                {product.qty} x ${product.price}=$
                                {product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4"
                                onClick={() => handleButton(product)}>
                                <i className="fa fa-minus"></i>
                            </button>
                            <button className="btn btn-outline-dark me-4"
                                onClick={() => handleButton(product)}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <>
            {state.length !== 0 && state.map(cartItems)}
        </>
    )
}

export default Cart