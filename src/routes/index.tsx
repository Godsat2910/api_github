import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import React from 'react'
import Post from '../pages/Post'

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Posts />} />
    <Route path="/post/:numberPost" element={<Post />} />
  </Routes>
)

export { Router }
