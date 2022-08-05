import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import "./AllProducts.css";
import { allProducts } from "../redux/actions/productActions";
import axios from "axios";
import { useDispatch } from "react-redux";
 
const AllProducts = () => {
  const dispatch = useDispatch();
  const [productResponse, setProductResponse] = useState(false);

  const fetchAllProducts = async () => {
      await axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProductResponse(true)
        dispatch(allProducts(res.data))
      }).catch( err => console.log(err))

  };

useEffect(() => {
  fetchAllProducts()
}, [])

  

  return (
    <div className="product_container">
         {productResponse ? <ProductCard /> : <h2 className="loading_message">Loading available products...</h2>}
    </div>
  )
}

export default AllProducts