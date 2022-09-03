import React from 'react'
import FeacherCards from '../FeacherCards/FeacherCards'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'


export default function Homepage() {


  return (
    <div>
  
       <Header/>
       <main>
        <Hero/>
        <FeacherCards/> 
       </main>
       <Footer/>          
    </div>
  )
}
