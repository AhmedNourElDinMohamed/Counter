import notFound from "../../assets/images/notfound.svg";

export const Notfound = () => {
  return (
    <div className="d-flex justify-content-start align-items-center flex-column pt-5 vh-75">
      <h1 className="fw-bold text-danger mb-5">Page Not Found ⚠</h1>
      <img src={notFound} alt="" />
    </div>
  );
};
