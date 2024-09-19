import React from 'react'
import LandingPage from './LandingPage'
import Blog from "./Blog"
import TopScorers from './TopScorers'

function Home() {
  return (
    <div>
        <LandingPage></LandingPage>
        <Blog></Blog>
        <TopScorers></TopScorers>
    </div>
  )
}

export default Home