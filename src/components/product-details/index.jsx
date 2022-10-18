import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
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

  console.log(product);
  return (
    <div classNameName="container py-5">
      <div className="card mb-3 w-75 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
