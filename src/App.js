import './App.css';
import SiteHeader from "./components/SiteHeader";
import { Routes, Route} from "react-router-dom";
import AllProducts from './components/AllProducts';
import SelectedProduct from "./components/SelectedProduct"

function App() {
  return (
    <>
      <SiteHeader />
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path="/product/:productId" element={<SelectedProduct />}/>
      </Routes>
    </>
  );
}

export default App;
