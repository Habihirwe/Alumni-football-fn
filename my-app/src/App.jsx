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
import AddBlog from "./components/AddBlog"
import Post from "./components/Post"
import Dashboard from "./components/Dashboard"
import UserTable from "./components/UserTable"
import BlogTable from "./components/BlogTable"
import MessageTable from "./components/MessageTable"

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
    <Route path="/contact" element={<Contact/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/blog/:postId" element={<Post />} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/addblog" element={<AddBlog/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/usertable" element={<UserTable/>} />
    <Route path="/blogtable" element={<BlogTable/>} />
    <Route path="/messagetable" element={<MessageTable/>} />

    </Routes>
    </BrowserRouter>

    <Footer/>
  </div>

  )
}

export default App
