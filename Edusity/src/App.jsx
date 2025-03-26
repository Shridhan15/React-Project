import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {/* passing props */}
        <Title subTitle='Our PROGRAMS' title='What We Offer' />
        <Programs />
        <About />
        {/* using title component again */}
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        
      </div>
      
    </div>
  )
}

export default App