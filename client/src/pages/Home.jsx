import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#f7f9ff] via-[#fffbee] to-[#f7f9ff] h-full">
        <Header />
        <Banner />
      </div>
      <Services />
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default Home;
