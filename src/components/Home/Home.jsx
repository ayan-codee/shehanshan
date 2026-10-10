import { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import Collection from "./WhyChooseUs";
import ProductRail from "./Trending";
import Banner from "./Banner";
import WhyChooseUs from "./WhyChooseUs";
import Categories from "./Categories";
import Newsletter from "./Newsletter";


export default function FashionLanding() {
  return (
    <div className="f-body  min-h-screen bg-white text-neut antialiased">
      <main>
        <Hero />
        <Categories/>
        <ProductRail />
        <Banner />
        <WhyChooseUs />
        <Newsletter/>
      </main>
    </div>
  );
}