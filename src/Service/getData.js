import { Api } from "../Api";

export const getAllMealsByCategories = async () => {
  try {
    const response = await Api.get("/categories.php");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMealsByCategory = async (category) => {
  try {
    const response = await Api.get(`filter.php?c=${category}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMealsByArea = async (area) => {
  try {
    const response = await Api.get(`filter.php?a=${area}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMealsByCategoryList = async () => {
  try {
    const response = await Api.get(`list.php?a=list`);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMealsByAreaList = async () => {
  try {
    const response = await Api.get("list.php?a=list");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMealsById = async (mealId) => {
  try {
    const response = await Api.get(`lookup.php?i=${mealId}`);
    return response;
  } catch (error) {
    console.error(error);
  }
};
