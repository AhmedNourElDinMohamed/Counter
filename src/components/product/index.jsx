import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct, increamentCartCounter } from "../../redux/cartSlice";
import "./style.css";
export const Product = (props) => {
  console.log("Props for product", props);
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(increamentCartCounter(1));
    dispatch(addProduct(product));
  };
  return props.products.map((product) => {
    return (
      <div className="col custom-product">
        <div className="card h-100">
          <Link to={`/shop/${product.id}`} className="text-center">
            <img src={product.image} class="card-img-top w-50 p-4" alt="..." />
          </Link>

          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description.slice(0, 100)}</p>
          </div>
          <div className="card-footer d-flex justify-content-around">
            <Link className="btn btn-outline-dark" to={`/shop/${product.id}`}>
              Details
            </Link>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  });
};
