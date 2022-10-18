import { Link } from "react-router-dom";
import "./style.css";
export const Product = (props) => {
  console.log("Test", props);

  return props.products.map((product) => {
    return (
      <div className="col mb-5">
        <div className="card card-shadow p-3">
          <Link to={`/shop/${product.id}`}>
            <img className="card-img-top" src={product.image} alt="..." />
          </Link>
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{product.title}</h5>
              {product.price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <Link
                className="btn btn-outline-dark mt-auto mb-2"
                to={`/shop/${product.id}`}
              >
                View details
              </Link>
              <button
                type="button"
                class="btn btn-success"
                onClick={props.cartCounter}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
