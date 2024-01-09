import React from "react";
import Home from "./Home";
import Posts from "./Posts"
import Navbar from "../common/Navbar";
import { Routes,Route } from 'react-router-dom';
import Single from "../Single";
import Digital from "./category/digital";
import Peinture from "./category/peinture";
import Contact from "./contact/contact";
const Pages = () => {
  return (
    <>
     <Navbar/>
        <div className=" flex justify-end ">
          <div className="w-5/6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/peinture" element={<Peinture />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/posts/:id" element={<Single/>} />
        <Route path="/contact" element={<Contact/>} />

      </Routes>
      </div>
        </div>
    </>
  );
};

export default Pages;
