import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className=" w-100 vh-100 d-flex justify-content-center align-items-center ">
        <div className="text-center">
          <h1>
            404 <strong>Error</strong> not found
          </h1>
          <Link  className="text-dark" to="/home">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
