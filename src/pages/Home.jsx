import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Home = () => {
  return (
      <div>
          home
          <Link to="/sign-up">Sign Up</Link>
    </div>
  )
}

export default Home