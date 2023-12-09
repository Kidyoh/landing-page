import React from 'react'
import Container from './container'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function hero() {
  return (<>
   <div className='w-full h-[600px] lg:mt-[70px] sm:mt-16 md:mt-12 bg-center bg-cover' style={{backgroundImage: "url('/vector.svg')"}}>
    <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Student Management System
            </h1>
            <p className="py-5 text-xl leading-normal text-white/50 lg:text-xl xl:text-2xl dark:text-gray-300">
            Nexy is a Student Management system that helps you to manage your students and their data.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-orange-500 rounded-md ">
                Get Started
              </a>
              <FontAwesomeIcon className='h-[40px] text-white' icon={faCirclePlay}  /> <span className='text-white text-lg'>Watch how it works</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img src="/groups.png" alt="" />
        
          </div>
        </div>
      </Container>

    </div>
    </>
  )
}

export default hero