import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-4 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            Ecommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <div className="buttons">
                <button className="btn">
                    <a href="" className="btn btn-outline-dark">
                        <i className="fa fa-sign-in me-1"></i> Iniciar Sesión
                    </a>
                    <a href="" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-user-plus me-1"></i> Regístrate
                    </a>
                    <a href="" className="btn btn-outline-dark ms-2">
                        <i className="fa fa-shopping-cart me-1"></i> Carrito ({state.length})
                    </a>
                </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
