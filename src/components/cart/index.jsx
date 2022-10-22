import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import {
  decreamentProductQuant,
  increamentProductQuant,
  removeProduct,
} from "../../redux/cartSlice";
export const Cart = () => {
  const cartProducts = useSelector((state) => state.addToCartStore.productList); // Select From Store With useSelect

  const dispatch = useDispatch(); // Use Hook useDispatche To Calling Action

  //remove Product From Cart
  const removeFromCart = (product) => {
    dispatch(removeProduct(product));
  };

  //remove Product From Cart
  const increamentQuant = (product, productQuant) => {
    dispatch(increamentProductQuant({ product, productQuant }));
  };

  //remove Product From Cart
  const decreamentQuant = (product, productQuant) => {
    dispatch(decreamentProductQuant({ product, productQuant }));
  };

  console.log(cartProducts);

  return (
    <>
      {cartProducts.length === 0 ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h2>Cart</h2>
                </div>
                <div className="card-body cart">
                  <div className="col-sm-12 empty-cart-cls text-center">
                    <img
                      src="https://i.imgur.com/dCdflKN.png"
                      width="130"
                      height="130"
                      className="img-fluid mb-4 mr-3"
                      alt=""
                    />
                    <h3>
                      <strong>Your Cart is Empty</strong>
                    </h3>
                    <h4>Add something to make me happy :)</h4>
                    <Link
                      to="/shop"
                      className="btn btn-warning cart-btn-transform m-3 fw-bold"
                      data-abc="true"
                    >
                      continue shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-8">
              <div className="p-2">
                <h4 className="text-danger fs-1">Shopping cart</h4>
                <div className="d-flex flex-row align-items-center pull-right fs-3 font-weight-bold">
                  <span className="">Total Price :</span>
                  <span>
                    {" "}
                    {Math.round(
                      cartProducts.reduce((pre, curr) => {
                        return pre + curr.price * curr.quant;
                      }, 0)
                    )}{" "}
                    $
                  </span>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
              {cartProducts.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="d-flex flex-row justify-content-between align-items-center px-5 py-2 bg-white mt-4 px-3 rounded product-details"
                  >
                    <div className="me-1 cart-image">
                      <img src={product.image} className="w-100" alt="" />
                    </div>
                    <div className="d-flex flex-column product-info">
                      <span className="font-weight-bold product-title">
                        {product.title}
                      </span>
                      <div className="d-flex flex-row product-desc">
                        {product.description.slice(0, 50)}
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center qty">
                      <button
                        onClick={() => increamentQuant(product)}
                        className="btn btn-success"
                      >
                        +
                      </button>
                      <span className="text-grey mx-3 fw-bold fs-5">
                        {product.quant}
                      </span>
                      <button
                        onClick={() => decreamentQuant(product)}
                        className="btn btn-danger"
                      >
                        -
                      </button>
                    </div>
                    <div>
                      <h5 className="text-danger">
                        {product.price * product.quant}$
                      </h5>
                    </div>
                    <div className="d-flex align-items-center">
                      <FaTrashAlt
                        onClick={() => removeFromCart(product)}
                        className="fs-4 text-danger trash-icon"
                      />
                    </div>
                  </div>
                );
              })}

              <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded w-50 m-auto">
                <input
                  type="text"
                  className="form-control border-1 gift-card"
                  placeholder="discount code/gift card"
                />
                <button className="btn btn-success btn-l " type="button">
                  Apply
                </button>
              </div>
              <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
                <button
                  className="btn btn-danger btn-block btn-lg ml-2 pay-button"
                  type="button"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
