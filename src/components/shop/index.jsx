import { Product } from "../product";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
export const Shop = () => {
  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  if (products === []) {
    return <Spinner animation="border" />;
  }

  return (
    <>
      {products.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" variant="danger" />
        </div>
      ) : (
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <Product products={products}></Product>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
