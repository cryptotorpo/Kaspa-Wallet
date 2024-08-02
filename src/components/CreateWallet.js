import * as React from 'react'
import '../css/kaspa.css'
import '../css/animations.css';

function CreateWallet () {
    return (
      <div className="App relaitve overflow-hidden">
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
