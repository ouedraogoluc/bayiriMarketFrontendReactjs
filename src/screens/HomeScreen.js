import React, { useEffect } from 'react'
import Products from '../components/Products';
import MessageBox from '../components/MessageBox';
import LoadinBox from '../components/LoadinBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productActions';

export default function HomeScreen() {
//get data from backend
const dispatch = useDispatch();
const productList = useSelector((state) => state.productList);
const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch]);
    return (
        <div>
            {
                loading ? (<LoadinBox></LoadinBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div className="row center">
                        {
                            products.map((product) => (
                                <Products key={product._id} product={product} />
                            ))
                        }
                    </div>
                )}

        </div>
    )
}
