import React from 'react'


export const Section2 = () => {
  return (

    <div className=' mt-32 mb-32 '>
      <div className='custom-box custom-border rounded-md  w-[1127px] h-[608px]'>
        <div className='flex gap-2 ml-8 mt-5 pb-5'>
            <div className=' rounded-full bg-red-500 w-[24px] h-[24px]'></div>
            <div className=' rounded-full bg-yellow-500 w-[24px] h-[24px]'></div>
            <div className=' rounded-full bg-green-500 w-[24px] h-[24px]'></div>
        </div>

        <div className='custom-border'></div>
        
        <div className='background-dots mt-4 -pt-[10] '>
            <div className=' font-inter text-2xl font-semibold leading-10 text-center mx-auto w-[930px] flex flex-row pl-8 pr-8 pt-20'> 
            Our fashion universe is still playing catch-up with old-school
            networking while others are using tech to connect & find gigs
            worldwide & automate tasks.
            </div>

            <div className='font-inter text-2xl font-semibold italic text-center leading-10  w-[800px] mx-auto pt-20  '>
            <span className='bg-yellow-200'>Let's unite to switch gears and bring a technology revolution
            in fashion</span> so you can level up that career | business you are
            </div>
        </div> 

      </div> 


     

    </div>
  )
}
