import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMealsById } from "../Service/getData";

const MealInfo = () => {
  const [meal, setMeal] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    getMealsById(id).then((res) => setMeal(res.data.meals));
  }, []);
  console.log(meal);

  return (
    <div className="container mt-5">
      <div className="col-12">
        {meal.map((recipe) => (
          <Fragment key={recipe.idMeal}>
            <div className="d-flex justify-content-between">
              <img
                className="me-5 rounded"
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                width={600}
                height={500}
              />

              <div className="w-100 d-flex flex-column justify-content-between">
                <div>
                  <h2 className="display-6">Name: {recipe.strMeal}</h2>
                  <h3>Category: {recipe.strCategory}</h3>
                  <h4>Area: {recipe.strArea}</h4>
                  {recipe?.strSource ? (
                    <a href={recipe?.strSource} target="blank">
                      Recipe source
                    </a>
                  ) : (
                    ""
                  )}
                  <p>
                    {recipe.strTags?.split(",").map((tag) => (
                      <div key={tag} className="badge bg-secondary me-2">
                        {tag}
                      </div>
                    ))}
                  </p>
                </div>

                <iframe
                  className="w-100 h-50 rounded"
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
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MealInfo;
