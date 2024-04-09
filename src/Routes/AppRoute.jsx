import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import MainSection from "../Components/MainPage/MainPage";
const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Hero-section" element={<LandingPage />} />
        <Route path="/mainpage" element={<MainSection />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
