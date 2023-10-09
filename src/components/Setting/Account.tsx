import React, { useState } from 'react'
import { Switch } from '@mantine/core';

import { AiOutlineLaptop } from 'react-icons/ai';
// import { IoNotificationsCircleSharp, IoChevronDownSharp } from 'react-icons/Io5';
import { FaFlagUsa } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { TbLogout } from 'react-icons/tb';
import Categories from './Categories';


const Account = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <section className='rounded-md shadow-md   min-h-[521px] h-full w-full gap-4 sm:gap-8 bg-white-main flex flex-col items-start  justify-start '>
      {/* fot head/....................... */}
      <div className="bg-white-main shadow-lg gap-7 h-[65px] w-full flex items-center justify-start   ">
        <h1
          onClick={() => setShowCategories(false)} // Hide Categories section
          className={`text-brand-main cursor-pointer  pl-5 text-[22px] sm:text-[24px] font-semibold leading-5 font-jakarta ${showCategories ? 'text-black-off' : ''
            }`}
        >
          Account
        </h1>
        <h1
          onClick={() => setShowCategories(true)} // Show Categories section
          className={`text-black-off cursor-pointer text-[22px] sm:text-[24px] font-semibold leading-5 font-jakarta ${showCategories ? '' : 'text-black-off'
            }`}
        >
          Categories
        </h1>
      </div>
      {/* switch div */}
      {showCategories ? (
        // Categories section
        <Categories />
      ) : (
        // Account sections with Switches, etc.
        <>
          <div className='px-3 sm:px-6 w-full'>
            <div className="bg-white-main shadow-lg gap-4 sm:gap-10    w-full  h-[65px] flex items-center justify-start   ">

              <AiOutlineLaptop className='text-[20px] ml-1 cursor-pointer sm:ml-5 sm:text-[30px] flex-shrink-0' />
              <div className='flex justify-between w-full  items-center'>
                <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">Auto-activate cashback</h1>
                {/* switch */}
                <div className="inline-flex items-center pr-1 sm:pr-5 ">
                  <Switch color="rgba(255, 201, 25, 1)" size='md' />

                </div>
              </div>
            </div>
          </div>
          <div className='px-3 sm:px-6 w-full'>
            <div className="bg-white-main shadow-lg gap-4 sm:gap-10    w-full  h-[65px] flex items-center justify-start   ">

              <MdLanguage className='text-[20px] ml-1 cursor-pointer  sm:ml-5 sm:text-[30px] flex-shrink-0' />
              <div className='flex justify-between w-full  items-center'>
                <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">Push notification on activation</h1>
                {/* switch */}
                <div className="inline-flex items-center pr-1 sm:pr-5 ">
                  <Switch color="rgba(255, 201, 25, 1)" size='md' />
                </div>
              </div>
            </div>
          </div>
          {/* language....................> */}
          <div className='px-3 sm:px-6  w-full'>
            <div className="bg-white-mai shadow-lg gap-4 sm:gap-10  w-full  h-full  flex items-start py-3 justify-center   ">
              <MdLanguage className='text-[20px] ml-1 cursor-pointer  sm:ml-5 sm:text-[30px] flex-shrink-0' />
              <div className='flex gap-3 justify-between w-full flex-col  items-start'>
                <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">Push notification on activation</h1>
                <p className='text-[20px] leading-7 '>Choose the language you’d like to use with Soleback. Your <br />
                  language is currently set to: English (US)</p>
                <div className='w-full max-w-[920px]'>
                  <div className="bg-white-main shadow-2xl gap-4 p-5   w-full  flex items-center justify-start   ">
                    <FaFlagUsa className='text-[18px] cursor-pointer  sm:text-[22px] flex-shrink-0' />
                    <div className='flex justify-between w-full  items-center'>
                      <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">Push notification on activation</h1>
                      <MdLanguage className='text-[20px] cursor-pointer  sm:text-[30px] flex-shrink-0' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* account management...................> */}
          <div className='px-3 sm:px-6  w-full'>
            <div className="bg-white-mai shadow-lg gap-4 sm:gap-10  w-full  h-full  flex items-start py-3 justify-center   ">
              <MdLanguage className='text-[20px] ml-1 cursor-pointer  sm:ml-5 sm:text-[30px] flex-shrink-0' />
              <div className='flex gap-3 justify-between w-full flex-col  items-start'>
                <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">Account Management</h1>
                <p className='text-[20px] leading-7 '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a <br /> piece of classical Latin literature from</p>
                <div className='w-full max-w-[920px]'>

                </div>
                <button className='flex py-[12px] px-[16px] items-center gap-3 shadow-md cash-box rounded-[8px] w-[210px] justify-center br-yellow-600 border border-solid  '>
                  <h1 className=' text-[16px] text-brand-main  font-bold font-jakarta '>Manage Account</h1>
                  <BsBoxArrowUpRight className=' cursor-pointer  text-[18px] flex-shrink-0' />
                </button>
              </div>
            </div>

          </div>
          <div className='flex flex-row items-center  w-full justify-between '>
            <div className='flex px-6 pb-6 '>

              <button className='flex  py-[8px] px-[30px] items-center gap-3 shadow-md cash-box rounded-[8px]  justify-center br-yellow-600 border border-solid  '>
                <TbLogout className=' cursor-pointer  text-[18px] flex-shrink-0' />
                <h1 className=' text-[16px] text-[#FC3400]    font-bold font-jakarta '>Logout</h1>
              </button>
            </div>
            <div className='flex gap-4  px-6 pb-6 '>

              <button className='flex  py-[8px] px-[20px] items-center gap-3 shadow-md cash-box rounded-[8px]  justify-center br-yellow-600 border border-solid  '>
                <h1 className=' text-[16px] text-brand-main  font-bold font-jakarta '>Discard</h1>
              </button>
              <button className='flex  py-[8px] px-[26px] bg-brand-main items-center gap-3 shadow-md cash-box rounded-[8px]  justify-center br-yellow-600 border border-solid  '>
                <h1 className=' text-[16px] text-white-main   font-bold font-jakarta '>Save</h1>
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Account