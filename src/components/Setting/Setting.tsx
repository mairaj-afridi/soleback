import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { AiOutlineLaptop } from 'react-icons/ai';

const Setting = () => {
  const [enabled, setEnabled] = useState(false)

  return <section className='rounded-md shadow-md  min-h-[521px] h-full w-full gap-4 sm:gap-8 bg-white-main flex flex-col items-center justify-start '>
    {/* fot head/....................... */}
    <div className="bg-white-main shadow-lg gap-7 h-[65px] w-full flex items-center justify-start   ">
      <h1 className="text-brand-main pl-5 text-[24px] font-semibold leading-5  font-jakarta  ">Account</h1>
      <h1 className="text-black-off  text-[24px] font-semibold leading-5  font-jakarta  ">Categories</h1>
    </div>

    {/* switch div */}
    <div className="bg-white-main shadow-lg gap-6 pl  h-[65px] flex items-center justify-start   ">

      <AiOutlineLaptop className='text-[17px] ml-5 sm:text-[24px]' />
      <h1 className="text-black-main pl-5 text-[24px] font-semibold leading-5  font-jakarta  ">Auto-activate cashback</h1>
      {/* switch */}
      <div className="pl-[36rem]  ">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-brand-main' : 'bg-black-main '}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only  ">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none bg-white-main inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
    </div>
  </section>
}

export default Setting