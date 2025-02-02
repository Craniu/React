import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import PlansPage from "./views/PlansPage";
import NotFound from "./views/NotFound";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes" element={<PlansPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
