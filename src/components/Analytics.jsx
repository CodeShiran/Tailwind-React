import React from 'react'
import laptop from '../assets/laptop.jpg'


const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] max-auto my-4' src={laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANATYTICS CENTRALLY</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex minima cupiditate magnam similique distinctio quo neque ipsum odio beatae eos ratione maxime rerum voluptatibus blanditiis voluptas dolores quod, totam repellat!</p>
                <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics