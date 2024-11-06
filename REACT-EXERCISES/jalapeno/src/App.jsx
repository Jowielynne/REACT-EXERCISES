import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Coding from "./pages/Coding";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import NoPage from "./pages/NoPage";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
