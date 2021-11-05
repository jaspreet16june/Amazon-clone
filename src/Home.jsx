import React from 'react';
import "./css/home.css";
import Product from "./Product";

function Home() {
    return (
      <div className="home">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon-banner"
        />

        {/* product-> id, name, price, rating, image */}
        {/* product */}
        <div className="home_row">
          <Product
            id="12345688"
            image="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL320_.jpg"
            name="Lenovo Flex 5 14\ 2-in-1 Laptop, 14.0\ FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
            rating={4}
            price={606.1}
          />
          <Product
            id="12345688"
            image="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL320_.jpg"
            name="Lenovo Flex 5 14\ 2-in-1 Laptop, 14.0\ FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
            rating={4}
            price={606.1}
          />
        </div>
        <div className="home_row">
          <Product
            id="12345688"
            image="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_UL320_.jpg"
            name="Lenovo Flex 5 14\ 2-in-1 Laptop, 14.0\ FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey"
            rating={4}
            price={606.1}
          />
        </div>
      </div>
    );
}
export default Home;
