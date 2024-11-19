import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import AboutUs from "./pages/aboutus";
import Contact from "./pages/contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}
