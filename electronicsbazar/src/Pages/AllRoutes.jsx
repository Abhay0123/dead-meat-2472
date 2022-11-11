import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import BestSelling from "./BestSelling";
//import Categories from "./Categories";
import Clearance from "./Clearance";
import Items from "./Items";
import NewArrivals from "./NewArrivals";
import WareHouseList from "./WareHouseList";

//import SingleUserPage from "./SingleUserPage";
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
    </Routes>
  );
}

export default AllRoutes;
