import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61rKFdQBcWL._SX3000_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Laptop"
            price={"60000"}
            image={
              "https://m.media-amazon.com/images/I/71m03KItMZL._AC_SY200_.jpg"
            }
            rating={5}
          />

          <Product
            title="Headphones"
            price={"600"}
            image={
              "https://m.media-amazon.com/images/I/618M4jM0v1L._AC_UL480_FMwebp_QL65_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Watches"
            price={"1000"}
            image={
              "https://m.media-amazon.com/images/I/61TY611i6LL._AC_UL480_FMwebp_QL65_.jpg"
            }
            rating={3}
          />

          <Product
            title="Mobiles"
            price={"10000"}
            image={
              "https://m.media-amazon.com/images/I/81S-XYJlzTL._AC_SY195_.jpg"
            }
            rating={1}
          />
          <Product
            title="Chocolates"
            price={"200"}
            image={
              "	https://m.media-amazon.com/images/I/510XEJhvuzS._SR215,215_.jpg"
            }
            rating={4}
          />

          <Product
            title="Headphones"
            price={"500"}
            image={
              "https://m.media-amazon.com/images/I/31tZ5WN2WXL._AC_SY200_.jpg"
            }
            rating={2}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
