import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
    </Routes>
  );
}
