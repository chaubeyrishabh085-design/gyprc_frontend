import React from "react";
import img1 from "../../components/assets/images/hero1.jpg";
import { ServicesCard } from "./ProductCard";

export const Products = () => {
  return (
    <>
      <div
        className=" mt-20 text-center py-10 jersey-25-regular relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(21,40,59, 0.9), rgba(21,40,59, 0.9)), url(${img1})`,
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div class=" animate-linear-move">
          <div class="absolute -z-1 w-3 h-3 top-14 border-2 opacity-30 border-white rotate-square"></div>
          <div class="absolute -z-1 w-3 h-3 bottom-8 border-2 opacity-30 border-white rounded-full rotate-circle1"></div>
          <div class="absolute -z-1 w-3 h-3 top-14 right-6 border-2 opacity-30 border-white rounded-full rotate-circle2"></div>
          <div class="absolute -z-1 w-3 h-3 bottom-10 right-0 border-2 opacity-30 border-white  rotate-circle3"></div>
        </div>

        <div class="absolute w-4 h-4 top-[180px] right-24 border-2 opacity-30 border-blue-500 rotate-square"></div>
        <div class="absolute w-4 h-4 bottom-[50px] left-10 border-2 opacity-30 border-blue-500 rotate-square"></div>
        <h1 className="text-6xl py-10 text-white  ">Our Products</h1>
        <p className="text-white text-lg">
          Our motivation and mission is to make Security Adoption & Absorption
          easy for organizations.
        </p>
      </div>
      {/* Services Content */}

      <div>
        <ServicesCard />
      </div>
    </>
  );
};
