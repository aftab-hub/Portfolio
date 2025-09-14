import React from 'react'
import { projects } from '../../../public/images/assets';
const Works = () => {
  return (
    <div id='works' className='flex flex-col items-center justify-center pb-5 w-full mt-[-20px] pt-18 px-4 md:px-10'>
        <h1 className='text-3xl font-bold text-gray-700'>Projects</h1>

        <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

           {projects.map(({imgSrc, title, description, link}) => {
            
            return(
                 <a href="https://github.com/aftab-hub/MernAuth">

            <div className='border border-gray-400 p-5 rounded-xl hover:shadow-lg transition-shadow duration-300'>
            <div>
                <img src={imgSrc} />
             </div>
             <h4 className='text-xl font-semibold'>{title} </h4> 
           
             <div>
                <p className='text-gray-600'>{description} </p>
             </div>
            </div>
            </a>
            )
           })}


        </div>
    </div>
  )
}

export default Works