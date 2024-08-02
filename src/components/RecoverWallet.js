import * as React from 'react'
import '../css/kaspa.css'
import '../css/animations.css';

function RecoverWallet () {
    return (
      <div className="App relaitve overflow-hidden">
        <div className='flex justify-center items-center h-full w-full flex-col'>
          <div className='text-left border-2 border-[#009688] w-full md:w-1/3 p-2 font-bold rounded-sm'>
            Recover Wallet
          </div>
          <div className='border-t-0 border-2 border-[#009688] py-10 w-full md:w-1/3 flex items-center rounded-sm flex-col'>
            <p className='text-center text-lg max-w-lg sm:max-w-xl'>Enter your 12-word seed phrase to recover your wallet (words are not case sensitive)</p>
            <div className='grid grid-cols-4 gap-2 px-10 sm:px-20 mt-5'>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
                <input className='border-2 border-[#009688] rounded-md py-1 text-center'></input>
            </div>
            <div className='flex flex-row gap-3 mt-20'>
              <a href="/"><div className='border-black rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer'>Cancel</div></a>
              <div className='bg-[#009688] border-[#009688] text-white rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer'>Recover Wallet</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RecoverWallet;
