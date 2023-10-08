import React from "react";
import Setting from "../components/Setting/Setting";
import { AiOutlineLaptop } from 'react-icons/ai';


const Settings = () => {
  return <section className='rounded-md shadow-md  min-h-[521px] h-full w-full gap-4 sm:gap-8 bg-white-main flex flex-col items-center justify-start '>
    {/* fot head/....................... */}
    <div className="bg-white-main shadow-lg gap-7 h-[65px] w-full flex items-center justify-start   ">
      <h1 className="text-brand-main pl-5 text-[24px] font-semibold leading-5  font-jakarta  ">Account</h1>
      <h1 className="text-black-off  text-[24px] font-semibold leading-5  font-jakarta  ">Categories</h1>
    </div>

    {/* switch div */}
    <div className="bg-white-main shadow-lg gap-6 pl  h-[65px] flex items-center justify-start   ">

      <AiOutlineLaptop className='text-[17px] ml-5 sm:text-[24px]' />
      <h1 className="text-brand-main pl-5 text-[24px] font-semibold leading-5  font-jakarta  ">Auto-activate cashback</h1>
      <div>

      </div>
    </div>
    <Setting />
  </section>
};

export default Settings;
