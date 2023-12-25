import React from 'react'
import '../index.css';
import { Header } from './Header';
import Avatar from './Avatar';
import About from './About';
import Skills from './Skills';



export const MyPortfolio = () => {
 return (
 <div className=''>
    <Header/>
    <Avatar/>

    <div className='w-[90%] mx-auto lg:flex justify-center'>
    <About/>
    <Skills/>
    </div>
    
 </div>
   
 )
}