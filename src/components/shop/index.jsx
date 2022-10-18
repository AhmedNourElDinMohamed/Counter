import { Product } from "../product";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
export const Shop = (props) => {
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products === [] ? (
            <Spinner animation="border" />
          ) : (
            <Product
              products={products}
              cartCounter={props.cartCounter}
            ></Product>
          )}
        </div>
      </div>
    </section>
  );
};
