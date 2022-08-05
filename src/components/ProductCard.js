import { useSelector } from "react-redux";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = () => {

    const products = useSelector(state => state.allProducts.products)
    
  return (
    <>
    {
      products.map(product => (
        <div key={product.id} className="product_card">
            <div className="prodoct_img">
                <img src={product.image} alt="product_image" />    
            </div>
            <div className="product_content">
              <h3> {(product.title).slice(0, 25)}</h3>
              <p> ${product.price}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div> 
        </div>
      ))
    }
    
    </>
  )
}

export default ProductCard