// import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import PostsPage from "./Components/Post/Postspage"

import People from "./Components/People/People"
import Create_Post from "./Components/Create_Post/Create_Post"
import Hashtag from "./Components/Hashtags/Hashtag"


import './App.css'

function App() {
  return (
    <>
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="top-row">
          <Hashtag className="Hashtag"/>
          <Create_Post />
        </div>
        <div className="bottom-row">
          <People />
          <PostsPage />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
