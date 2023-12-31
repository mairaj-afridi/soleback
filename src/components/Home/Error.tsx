import React from 'react'

const Error = () => {
  return (
    <section className='rounded-md shadow-md  min-h-[521px] h-full w-full gap-4 bg-white-main flex flex-row items-center justify-center '>

    <div className='gap-8 w-full flex flex-col items-center justify-center'>
        <img
            className="w-[150px] sm:w-[210px] h-[150px] sm:h-[230px] object-cover pointer-events-none rounded-xl"
            src="/Assets/Error.png"
            alt=""
        />
        <div className='flex  flex-col items-center justify-center text-center gap-[8px]'>
            <h1 className='text-[18px] sm:text-[30px] font-jakarta font-semibold text-black-secondary '>Cashback is not available on this site</h1>
            <p className='font-medium text-[13px] sm:text-[18px] leading-5 text-black-off font-manrope '>If you believe that we are supporting this website, please <br/> head to 'Stores' and activate cashback manually.</p>
        </div>
        <div className='inline-flex rounded-[12px]  px-[12px] sm:px-[42px] py-[3px] sm:py-[6px]  justify-center items-center gap-[8px] cash-box '>
    <h1 className='text-20px sm:text-[24px] font-semibold'>View Stores</h1>
</div>
    </div>
</section>
  )
}

export default Error