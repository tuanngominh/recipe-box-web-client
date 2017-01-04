import React from 'react'
import imgSource from '../img/cocktail-828182_640.jpg'

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      Build your recipe box... 
      <span style={{color: 'red'}}><i className="fa fa-cutlery" aria-hidden="true"></i></span>{' '}
      <span style={{color: 'green'}}><i className="fa fa-lemon-o" aria-hidden="true"></i></span>{' '}
      <span style={{color: 'blue'}}><i className="fa fa-apple" aria-hidden="true"></i></span>
    </p>
    <p>
      The app is built with React, Redux, React Router.
    </p>
    <img src={imgSource} alt='Recipe' className='img-responsive'/>
    <br/>
    <br/>
    <br/>
    <span>Image from <a target='_blank' href='https://pixabay.com/en/cocktail-pina-colada-party-drink-828182/'>pixal bay</a></span>
  </div>
)

export default About