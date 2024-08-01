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
                <p className='text-lg font-bold text-white text-left'>Recover From Seed</p>
                <p className='text-xl text-white text-center'>Enter your 12-word seed phrase to recover your wallet (words are not case sensitive)</p>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2 gap-x-4'>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                    <input type="text" className='bg-transparent border-2 border-[#009688] rounded-md p-2 mt-10'></input>
                </div>
                <div className='text-left text-red-400 mt-5 text-sm'>Invalid seed(Could not detect the used word list: dede dede dede dede dede dede dede dede dede dede dede dede dede dede)</div>
                <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-7'>
                    <a href="/"><div className='hover:cursor-pointer rounded-lg bg-transparent border-white border-2 p-4 text-xl'>Cancel</div></a>
                    <div className='hover:cursor-pointer rounded-lg bg-[#009688] p-4 text-xl'>Recover wallet</div>
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
