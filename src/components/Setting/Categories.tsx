import React from 'react'
import { Switch } from '@mantine/core';

const Categories = () => {
  return (
  <>
      <h1 className="text-brand-main cursor-pointer  pl-5 text-[22px] sm:text-[24px] font-semibold  font-jakarta">
        Shopping Category
        <p className='text-[20px] text-black-main '>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry's standard dummy text</p>
      </h1>

      {[0, 1, 2, 3, 4].map((items, index) => (
        <div key={index} className='px-3 sm:px-6 w-full'>
            <div className="bg-white-main shadow-lg gap-4 sm:gap-10 p-6   w-full  h-[65px] flex items-center justify-start   ">
              <div className='flex justify-between w-full  items-center'>
                <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">All</h1>
                <div className="inline-flex items-center  ">
                  <Switch color="rgba(255, 201, 25, 1)" size='md' />
                </div>
              </div>
            </div>
           </div>
      ))
      }
</>

  )
}

export default Categories

const Category =[
  {
    id: 1,
    name: 'all',
  },
]