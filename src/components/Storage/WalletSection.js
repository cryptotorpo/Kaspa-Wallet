import * as React from 'react'
import '../../css/animations.css';
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

export default function Home() {
    return (
      <div className="relative py-12 text-white bg-transparent fadeIn sm:py-16">
        <div className="flex flex-col items-start justify-start px-6 mx-auto max-w-7xl lg:px-8">
          <div className='w-full overflow-auto'>
            <div className='px-5 h-[700px] rounded-xl overflow-x-hidden justify-center items-center flex'>
              <div className='border-[#009688] border-2 p-10 w-1/2 rounded-md'>
                <p className='text-3xl'>Welcome to Kaspa Wallet</p>
                <div className='flex flex-row gap-5 mt-16 justify-center'>
                  <div className='hover:cursor-pointer rounded-lg bg-[#009688] p-4 text-xl'>Create New Wallet</div>
                  <div className='hover:cursor-pointer rounded-lg bg-[#009688] p-4 text-xl'>Recover from Seed</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center w-full gap-5 mt-10 text-white'>
            <a href="" target="_blank"><FaXTwitter className='w-6 h-6 cursor-pointer hover:translate-y-[-5px] transition-transform duration-700'/></a>
            <a href="" target="_blank"><PiTelegramLogo className='w-6 h-6 cursor-pointer hover:translate-y-[-5px] transition-transform duration-700'/></a>
            <a href="" target="_blank"><FiGithub  className='w-6 h-6 cursor-pointer hover:translate-y-[-5px] transition-transform duration-700'/></a>
          </div>
        </div>
      </div>
    )
}
