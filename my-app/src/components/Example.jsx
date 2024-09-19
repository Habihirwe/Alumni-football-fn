import React from 'react'
import Home from "./LandingPage"
import Blog from "./Blog"

function Example() {
  return (
    <div>
        <Home/>
        <div className="flex-1 flex flex-col">
        <Outlet/>

        </div>
        <Blog/>
    </div>
  )
}

export default Example