import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import History from "./components/History"
import Activities from "./components/Activities"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Blog from "./components/Blog"
import Post from "./components/Post"
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
    <Route path="/login" element={<Login/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/blog/:postId" element={<Post />} />

    </Routes>
    </BrowserRouter>

    <Footer/>
  </div>

  )
}

export default App
