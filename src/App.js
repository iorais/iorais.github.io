import Fonts from "./Fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projectcard from "./components/Projectcard";
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
          <Route path="/test" element=  {
            <Projectcard 
              title="Hello" 
              video="https://www.youtube.com/embed/39aNTYJP-SQ?rel=0&controls=0"
              link="https://devpost.com/software/nestnotifications"
              description="testing" />
          }/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App;
