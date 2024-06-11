import React from 'react'
import './AboutMe.css'
import MyPic from '../../Assets/My-Pic.jpg'

const AboutMe = () => {
  return (
    <div id='AboutMe'>
        <img src={MyPic} className='MyPic'></img>
        <p>Hi, I'm Ethan. Welcome to my blog, where I share the little stories and big moments from my favorite hobbies—concerts, holiday adventures, and miniature painting. Join me as I explore these passions and celebrate the meaningful moments that make life special.</p>
    </div>
  )
}

export default AboutMe