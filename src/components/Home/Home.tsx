import React from 'react'
import { AiFillDollarCircle, AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsStars } from 'react-icons/bs'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'


const Home = () => {
    return (
        <section className='rounded-md shadow-md  min-h-[521px] h-full w-full gap-4 sm:gap-8 bg-white-main flex flex-col items-center justify-center '>

            {/* logo................> */}
            <div className=' w-[296px] flex items-center justify-center'>
                <img
                    className="w-[170px] h-[170px] object-cover pointer-events-none rounded-xl"
                    src="/Assets/Adidas.png"
                    alt=""
                />
            </div>
            {/* adidas title.....................> */}
            <div className='flex  flex-col items-center justify-center gap-[3px]'>
                <h1 className='text-[25px] font-jakarta font-semibold text-black-secondary '>Adidas</h1>
                <p className='font-medium text-[18px] leading-5 text-black-off font-manrope '>Apparel Company</p>
            </div>
            {/* CashBox............> */}
            <div className='inline-flex rounded-[32px]  px-[12px] sm:px-[18px] py-[3px] sm:py-[8px]  justify-center items-center gap-[8px] cash-box '>
                <AiFillDollarCircle className='text-[17px] sm:text-[24px] text-success' />
                <h1 className='text-[24px] text-success font-semibold'>Upto 10% Cashback</h1>
                <AiOutlineExclamationCircle className='text-[24px] text-[#CDCDCD]  ' />
            </div>

            {/* Button............> */}
            <div className='inline-flex cursor-pointer  pl-14 sm:pl-40  pr-1 sm:pr-3 rounded-[8px] py-2 justify-center items-center gap-[8px] bg-yellow-400 shadow-md '>
                <BsStars className='text-[17px] sm:text-[24px]' />
                <h1 className=' text-[17px] sm:text-[24px] font-jakarta font-semibold '>Activate Cashback</h1>
                <MdOutlineKeyboardArrowRight className=' text-[17px] sm:text-[24px] ml-12 sm:ml-24' />
            </div>
        </section>
    )
}

export default Home