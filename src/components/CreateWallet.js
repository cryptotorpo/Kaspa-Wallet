import * as React from 'react'
import '../css/kaspa.css'
import '../css/animations.css';
import { FiLock } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

function CreateWallet () {
    return (
      <div className="App relaitve overflow-hidden">
        <img src="./kaspa.png" className='fixed left-2 top-2 w-8 h-8'></img>
        <FiLock className='fixed right-16 top-2 w-5 h-5'/>
        <IoLanguageOutline className='fixed right-10 top-2 w-5 h-5'/>
        <FaRegMoon className='fixed right-4 top-2 w-5 h-5'/>
        <div className='flex justify-center items-center h-full w-full'>
          <div className='border-2 border-[#009688] py-10 w-full md:w-1/3 flex items-center flex-col font-medium'>
            <p className='text-lg'>Welcome to Kaspa Wallet</p>
            <div className='flex flex-row gap-3 mt-10'>
              <a href="/info"><div className='bg-[#009688] border-[#009688] text-white rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer'>Create New Wallet</div></a>
              <a href="/recover"><div className='bg-[#009688] border-[#009688] text-white rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer'>Recover From Seed</div></a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CreateWallet;
