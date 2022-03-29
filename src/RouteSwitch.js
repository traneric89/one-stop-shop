import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Catalogue from "./components/Catalogue";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
