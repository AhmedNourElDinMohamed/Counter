import { Link } from "react-router-dom";
import "./style.css";
export const Home = () => {
  return (
    <section className="bgimage py-5">
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
            <p>
              <Link to="/shop" className="btn btn-outline-light btn-large">
                Shooping »
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
