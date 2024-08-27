import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import History from "./components/History"
import Activities from "./components/Activities"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Signup from "./components/Signup"
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/history" element={<History/>} />
    <Route path="/activities" element={<Activities/>} />
    <Route path="/team" element={<Team/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>

    <Footer/>
  </div>

  )
}

export default App
