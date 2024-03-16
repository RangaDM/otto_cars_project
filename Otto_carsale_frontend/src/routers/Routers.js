import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Categories from "../pages/Categories";
import VanListing from "../pages/VanListing";
import RentListing from "../pages/Rentable_cars";
import CarRentDetails from "../pages/CarRentDetails";
import Login from "../pages/Login";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/vehicles" element={<Categories />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="vans" element={<VanListing />} />
      <Route path="/vehicles/:slug" element={<CarDetails />} />
      <Route path="/rent/:slug" element={<CarRentDetails />} />
      <Route path="/rent" element={<RentListing />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
