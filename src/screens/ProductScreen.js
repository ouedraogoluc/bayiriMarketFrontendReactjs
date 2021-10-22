import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoadinBox from '../components/LoadinBox'
import MessageBox from '../components/MessageBox'
import { detailsProduct } from '../actions/productActions'

export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
        <div>
            {
                loading ? (<LoadinBox></LoadinBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="row top">
                        <Link to="/">go to back</Link>
                        <div className="col-2">
                            <img src={product.image} alt={product.name} className="large" />
                        </div>
                        <div className="col-1">
                            <ul>
                                <li><h1>{product.name}</h1></li>
                                <li><Rating
                                    rating={product.name}
                                    numRiews={product.numReviews}
                                /></li>
                                <li>price:{product.price}</li>
                                <li>description:{product.description}</li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>price:</div>
                                            <div className="price">{product.price}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div>
                                                {product.countInStock > 0 ? (
                                                    <span className="success">In Stock</span>
                                                ) : (
                                                    <span className="danger">Unavailable</span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                    {
                                        product.countInStock > 0 && (
                                            <>
                                                <li>
                                                    <div className="row">
                                                        <div >Qty</div>
                                                        <div>
                                                            <select
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {[...Array(product.countInStock).keys()].map(
                                                                    (x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    )
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <button onClick={addToCartHandler} className="primary block" >Add to Cart </button>
                                                </li>
                                            </>
                                        )
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}