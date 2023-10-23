import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../Pages/Home";
import MealsList from "../components/MealsList";
import MealInfo from "../MealsInfo";

const Root = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/meals/:category" element={<MealsList />} />
        <Route path="/meal/:id" element={<MealInfo />} />
      </Routes>
    </>
  );
};

export default Root;
