import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./views/HomePage";
import NotFound from "./views/NotFound";
import Contacto from "./views/Contacto";
import HappyCake from "./views/HappyCake";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/happycake" element={<HappyCake />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
