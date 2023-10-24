import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../Pages/Home";
import MealsList from "../components/MealsList";
import MealInfo from "../components/MealsInfo";
import NotFound from "../Pages/NotFound";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/meals/:category" element={<MealsList />} />
          <Route path="/meal/:id" element={<MealInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Root;
