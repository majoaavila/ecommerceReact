import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src="https://ticnegocios.camaravalencia.com/wp-content/uploads/2018/12/instagram-shopping.jpg" className="card-img" alt="home" height="620px"/>
        <div className="card-img-overlay">
          <h1 className="card-title fw-bold text-center display-3 my-3">¡Bienvenidx!</h1>
          <p className="card-text text-center fs-2">
            Este es un proyecto de React para un bootcamp de DEV.F
          </p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
