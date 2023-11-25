import Fonts from "./components/Fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Education from "./components/Education";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Fonts/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/test" element={<Education/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App;
