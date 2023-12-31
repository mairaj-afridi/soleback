import React, { useState } from 'react'
import { Switch } from '@mantine/core';

import { AiOutlineLaptop } from 'react-icons/ai';
// import { IoNotificationsCircleSharp, IoChevronDownSharp } from 'react-icons/Io5';
import { FaFlagUsa, FaUserAlt } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { BiSolidNotification } from 'react-icons/bi';
import { HiMiniLanguage } from 'react-icons/hi2';
import { BiChevronDown } from 'react-icons/bi';




import { TbLogout } from 'react-icons/tb';
import Categories from './Categories';


const Account = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <section className='rounded-md shadow-md   min-h-[521px] h-full w-full gap-2 sm:gap-4 bg-white-main flex flex-col items-start  justify-start '>
      {/* ............................ for heading ....................... */}
      <div className="bg-white-main shadow-lg gap-7 h-[65px] w-full flex items-center justify-start   ">
        <h1
          onClick={() => setShowCategories(false)} // Hide Categories section
          className={`text-black-o cursor-pointer  pl-5 text-[22px] sm:text-[24px] font-semibold leading-5 font-jakarta ${showCategories ? 'text-black-off' : 'text-brand-main'
            }`}>
          Account
        </h1>
        <h2
          onClick={() => setShowCategories(true)} // Show Categories section
          className={`text-black-off cursor-pointer text-[22px] sm:text-[24px] font-semibold leading-5 font-jakarta ${showCategories ? 'text-brand-main' : 'text-black-off' 
            }`}>
          Categories
        </h2>
      </div>

      {/*.................................switch div........................... */}
      {showCategories ? (
        // Categories section
        <Categories />
      ) : (
        // Account sections with Switches, etc.
        <>
          <div className='px-3 sm:px-6 w-full'>
            <div className="bg-white-main border border-solid cash-box   rounded-[6px]  gap-4 sm:gap-10    w-full  h-[65px] flex items-center justify-start   ">

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
            <div className="bg-white-main border  rounded-[6px] border-solid cash-box    gap-4 sm:gap-10    w-full  h-[65px] flex items-center justify-start   ">

              <BiSolidNotification className='text-[20px] ml-1 cursor-pointer  sm:ml-5 sm:text-[30px] flex-shrink-0' />
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
            <div className="bg-white-mai border border-solid cash-box  rounded-[6px]    gap-4 sm:gap-10  w-full  h-full  flex items-start py-3 justify-center   ">
              <HiMiniLanguage className='text-[20px] ml-1 cursor-pointer  sm:ml-5 sm:text-[30px] flex-shrink-0' />
              <div className='flex gap-3 justify-between w-full flex-col  items-start'>
                <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">Push notification on activation</h1>
                <p className='text-[12px] sm:text-[20px] leading-5 sm:leading-7 '>Choose the language you’d like to use with Soleback. Your <br/>
                  language is currently set to: English (US)</p>
                <div className='w-full p-2 max-w-[920px]'>
                  <div className="bg-white-main border rounded-[4px]  gap-2 p-3 sm:p-5  w-full  flex items-center justify-start   ">
                    <FaFlagUsa className='text-[14px] cursor-pointer  sm:text-[22px] flex-shrink-0' />
                    <div className='flex justify-between w-full  items-center'>
                      <h1 className="text-black-main text-[14px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">United States of America</h1>
                      <BiChevronDown className='text-[14px] cursor-pointer  sm:text-[30px] flex-shrink-0' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* account management...................> */}
          <div className='px-3 sm:px-6  w-full'>
            <div className="bg-white-mai border border-solid cash-box  rounded-[6px]    gap-4 sm:gap-10  w-full  h-full  flex items-start py-3 justify-center   ">
              <FaUserAlt className='text-[20px] ml-1 cursor-pointer  sm:ml-5 sm:text-[30px] flex-shrink-0' />
              <div className='flex gap-3  w-full flex-col '>
                <h1 className="text-black-main text-[17px] sm:text-[24px] font-semibold leading-5  font-jakarta  ">Account Management</h1>
                <p className='text-[16px] sm:text-[20px] leading-5 sm:leading-7 '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a <br /> piece of classical Latin literature from</p>
                <div className='w-full max-w-[920px]'>

                </div>
                <button className='flex py-[12px] px-[16px] items-center gap-3 shadow-md cash-box rounded-[8px] w-[210px] justify-center br-yellow-600 border border-solid  '>
                  <h1 className=' text-[16px] text-brand-main  font-bold font-jakarta '>Manage Account</h1>
                  <BsBoxArrowUpRight className=' cursor-pointer  text-[18px] flex-shrink-0' />
                </button>
              </div>
            </div>

          </div>
          <div className='flex flex-col sm:flex-row items-center  w-full justify-center sm:justify-between '>
            <div className='flex px-6 pb-6 '>

              <button className='flex py-[10px] sm:py-[8px]  px-[60px] sm:px-[30px] items-center gap-3 shadow-md cash-box rounded-[8px]  justify-center br-yellow-600 border border-solid  '>
                <TbLogout className=' cursor-pointer  text-[18px] flex-shrink-0' />
                <h1 className=' text-[16px] text-[#FC3400]    font-bold font-jakarta '>Logout</h1>
              </button>
            </div>
            <div className=' flex gap-4  px-6 pb-6 '>

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