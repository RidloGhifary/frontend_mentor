import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Destination from "./pages/Destination";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </BrowserRouter>
  );
}