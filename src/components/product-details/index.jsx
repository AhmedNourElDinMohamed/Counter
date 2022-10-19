import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
export const Details = (props) => {
  const params = useParams();
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  const [product, setProduct] = useState({});

  return (
    <div classNameName="container">
      <div className="row justify-content-center py-5">
        <div className="card col-8 mb-3 w-75 mx-auto box-shadow">
          <div className="row g-0">
            <div className="col-md-4 text-center">
              <img
                src={product.image}
                className="img-fluid rounded-start w-50"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-danger">{product.title}</h5>
                <p className="card-text text-dark-50">{product.description}</p>
                <p className="card-text">
                  <small className="text-muted">Price : {product.price} </small>
                </p>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={props.cartCounter}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
