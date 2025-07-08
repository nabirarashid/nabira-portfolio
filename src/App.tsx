import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
    </Routes>
        <Footer />
    </Router>
  )
}

export default App