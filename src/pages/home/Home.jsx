import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Movies from "@/components/movies/Movies";
import React, { memo, useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    request("/discover/movie").then((res) => {
      setData(res.data);
    });
  }, []);
  
  return (
    <div className="bg-black">
      <Header/>
      <Carousel data={data} />
      <Movies data={data}/>
      <Footer/>
    </div>
  );
};

export default memo(Home);
