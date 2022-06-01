import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        alert("We are going to be looking for: charmander.")
        navigate('/details/charmander')
    }
  return (
    <div>
        <h1>About Page</h1>
        <button onClick={handleClick}>Go To Detail Page</button>
    </div>
  )
}

export default About
