import React from 'react';
import "./SelectedProduct.css"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct , removeProduct } from "../redux/actions/productActions"

const SelectedProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(state => state.selectedItem)
  const { title, description, category , price, image} = product;

  const fetchSelectedProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(err => console.log(err))

    dispatch(selectedProduct(response.data))
  };

  useEffect(() => {
      fetchSelectedProduct();

      return () => {
        dispatch (removeProduct())
      }
      //eslint-disable-next-line
  }, [productId])  

  return (
    <>
    <div className='product_details'>
        <div className='selected_image'>
            <img src={image} alt={title} />
        </div>
        <div className='selected_details'>
            <h2> {title} </h2>
            <p id='price'> {price} </p>
            <p id='category'>{category}</p>
            <p id='description'> {description} </p>
        </div>
    </div>
    </>

  )
}

export default SelectedProduct