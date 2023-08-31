"use client";
import { useState } from "react";
import Blogs from "./Blogs";
import Featured from "./Featured";
import Navbar from "./Navbar";

const Wrapper = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Navbar category={category} setCategory={setCategory} />
      <Featured />
      <Blogs category={category} />
    </div>
  );
};
export default Wrapper;
