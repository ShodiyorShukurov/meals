import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealsById } from "../../Service/getData";
import PuffLoader from "react-spinners/PuffLoader";

const MealInfo = () => {
  const [meal, setMeal] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getMealsById(id).then((res) => {
      setMeal(res.data.meals);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mt-5">
      {loading ? (
        <div className="loader">
          <PuffLoader
            color={"red"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="col-12">
          {meal.map((recipe) => (
            <div className="row my-5" key={recipe.idMeal}>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 mb-3 mb-md-0 h-100">
                <div className="card h-100 shadow-lg ">
                  <img
                    className="rounded w-100"
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                  />
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-6 col-xl-6 h-100">
                <div
                  className="card border-0 shadow-lg rounded"
                  style={{ padding: " 15px 0" }}
                >
                  <div className="card-body">
                    <h1> {recipe.strMeal}</h1>
                    <p className="me-2">
                      <b>Category:</b> {recipe.strCategory}
                    </p>
                    <p className="me-2">
                      <b>Area:</b> {recipe.strArea}
                    </p>
                    {recipe?.strSource ? (
                      <a
                        className="me-2"
                        href={recipe?.strSource}
                        target="blank"
                      >
                        Recipe source
                      </a>
                    ) : (
                      ""
                    )}
                    <p>
                      <div>
                        Tags:
                        {recipe.strTags?.split(",").map((tag) => (
                          <span key={tag} className="badge bg-success mx-2">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </p>

                    <iframe
                      className="w-100 rounded mb-3"
                      height={300}
                      src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                        -11
                      )}`}
                      title={recipe.strMeal}
                    ></iframe>

                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-success w-50 me-3"
                        onClick={() => setShow(!show)}
                      >
                        Show recipe
                      </button>
                      <button
                        className="btn btn-secondary w-50"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {show && (
                <table className="table table-bordered my-5">
                  <thead>
                    <tr>
                      <td>Ingredient</td>
                      <td>Measure</td>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(recipe).map((key, index) => {
                      if (key.includes("Ingredient") && recipe[key]) {
                        return (
                          <tr key={index}>
                            <td>{recipe[key]}</td>
                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealInfo;
