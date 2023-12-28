import React from 'react'
import Card from './Cards'

const ProjectSection = () => {
  return (
    <div>

    
    <div className='w-[100%] h-[450px] bg-violet-600'>
        
    <div className="w-[90%] mx-auto ">
    <h1 className='text-2xl pt-24 logo text-center lg:text-4xl text-white tracking-wider'>PROJECTS</h1>
        <div className="w-[220px] h-[2px] mb-6 mt-2 bg-white mx-auto rounded-lg"></div>

        <p className="text-center text-sm text-white sm:text-lg mt-6 tracking-wider">Here are some of my projects I made using latest Frontend Technology . There are lot more in my github repository .</p>

        <p className="text-center text-sm text-black sm:text-lg mt-2 mb-6 tracking-wider"> Dont miss to check out 😄</p>
    </div>
    </div>

        <div className=" -mt-40 flex justify-center flex-wrap gap-5 lg:gap-16">
            <Card img="" name="FOOD APP" desc="Food Delivery Application like Swiggy and Zomato..." link=""/>
            <Card img="" name="NETFLIX-GPT" desc="Netflix-GPT is an application similar to Netflix... " link=""/>
            <Card img="" name="TODO APP" desc="Application to store daily stuffs news for our day to day life..." link=""/>
            <Card img="" name="GUESS ASAP" desc="Guess as soon as Possible . Good Luck 👍 ..." link=""/>
            <Card img="" name="CHAR COUNT" desc="Character counter Application with Grammarly API..." link=""/>
            <Card img="" name="LMS" desc="Learning Management System using Vanilla js..." link=""/>
           
        </div>
    
    </div>
  )
}

export default ProjectSection