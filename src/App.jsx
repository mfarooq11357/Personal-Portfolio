import "./App.css";

import "./build/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
    
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
