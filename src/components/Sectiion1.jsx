import React from 'react'


export const Sectiion1 = () => {
  return (
    <div >
        <img src='the devil work.png' style={{ width: '900px', height: '268px' }}></img>

        <p className='font-bold text-4xl italic text-center mb-4'>Hey Fashion Fam,</p>
        <div className='leading-20 px-20'>
        <p className=' font-semibold text-2xl text-center '>
           Is old always gold? 
        </p>
        <p className=' font-semibold text-2xl text-center  '> 
           Not when it comes to technology 
        </p>
        <p className=' font-semibold text-2xl  text-center '>
           New is - better, faster & more efficient
        </p>
        </div>

        <div className='shadow-custom text-center border flex mx-auto mt-7 justify-between border-black  items-center rounded-md  sha' style={{ width: '671px', height: '68px' }}>
         {/* <input placeholder='Email address'  ></input> */}
         <input  className='text-center placeholder-black  outline-none' type="text" placeholder='Email address'/>

         <button  class=" text-white font-bold border-l-2 rounded-r-md border-black bg-red-600 p-4 " style={{ height: '68px' }}> Get Early Acces</button>
        </div>
        

    </div>
  )
}
