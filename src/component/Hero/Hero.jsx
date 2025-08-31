import React from 'react'
import './Hero.css'

function Hero() {
  return (

    <div className='hero container' name='hero'> 
     {/* βάζω δεύτερη class για να περιοριστεί με βάση το container που έχω στο index.css   */}

      <div className='hero-text'>
        <h1>Better Education</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <button className='btn'>Read More</button>
      </div>

    </div>

  )
}

export default Hero
