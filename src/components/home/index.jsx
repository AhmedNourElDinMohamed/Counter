import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";
export const Home = () => {
  const counter = useSelector((state) => state.counterStore.counter);
  return (
    <section className="bgimage vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 p-5 hero-section">
            <h5 className="text-warning mb-4">
              Start Shooping, With A Collection Of Products...
            </h5>
            <p className="text-white-50 mb-5">
              This is a template for a simple marketing or informational
              website. It includes a large callout called the hero unit and
              three supporting pieces of content. Use it as a starting point to
              create something more unique.
            </p>
            <div>
              <Link to="/shop" className="btn btn-outline-light btn-large mb-3">
                Shooping »
              </Link>
              <p className="text-danger mb-5 fw-bold">
                We Have {counter} Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
