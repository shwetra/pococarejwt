import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import Login from "./login";
import Signup from "./signup";

function AllRoutes() {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   
  );
}

export default AllRoutes;