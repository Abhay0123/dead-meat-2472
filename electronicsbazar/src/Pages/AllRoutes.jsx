import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import BestSelling from "./BestSelling";
import Categories from "./Categories";
import Clearance from "./Clearance";
import Items from "./Items";
import NewArrivals from "./NewArrivals";
import WareHouseList from "./WareHouseList";
import SingleProduct from "./SingleProductPage";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Payment from "./Payment";

//import PageNotFound from "./NotFoundPage";
//import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/bestselling" element={<BestSelling />}></Route>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/clearance" element={<Clearance />}></Route>
      <Route path="/items" element={<Items />}></Route>
      <Route path="/newarrivals" element={<NewArrivals />}></Route>
      <Route path="/warehouselist" element={<WareHouseList />}></Route>
      <Route path="/newarrivals/:id" element={<SingleProduct />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/checkout/payment" element={<Payment />}></Route>
      
           <Route path="/categories" element={<Categories />}></Route>
    </Routes>
  );
}

export default AllRoutes;
