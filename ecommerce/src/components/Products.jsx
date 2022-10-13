import React, { useState, useEffect } from "react";
import { useSelector , useDispatch} from "react-redux";
import { addToCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { NavLink} from "react router-dom";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addToCart(product));
  }


  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://ecomerce-master.herokuapp.com/api/v1/item"

        
      );
      // const data = await response.json();
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  };


  const ShowProducts = () => {
    return (
      <>
        <div className="row">
          {filter.map((product) => {
            return (
              <>
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img src={product.image} className="card-img-top" alt={product.product_name} height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{product.product_name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <p className="card-text">{product.brand}</p>
                    <button className="btn-outline-dark">
                      <NavLink to="/cart" className="btn btn-primary" onClick={() => addProduct(product)}>Agregar al carrito</NavLink>
                    </button>
                  </div>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </>
    );
  }

    

  return (
    <div>
      <div className="container my-4 py-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bold text-center">
              Los productos más nuevos
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center align-item-center">
          {loading ? <Loading /> : <ShowProducts />}
          {/* {<ShowProducts />} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
