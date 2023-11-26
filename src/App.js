import Fonts from "./components/Fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {

  return (
    <div>
      <Fonts/>
      <Navbar/>
      <Home/>
      <Projects/>
      <Resume/>
      <Footer/>
    </div>
  )
}

export default App;
