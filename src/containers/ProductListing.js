import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product';
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';

const ProductListing = () => {
 const products = useSelector((state) => state);
 const dispatch = useDispatch();
 const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
        console.log("Err", err);
    });
    dispatch(setProducts(response.data));
};

useEffect(() => {
 fetchProducts();
}, [])
  return (
    <div className='ui grid container'>
      <Product/>
    </div>
  )
}

export default ProductListing