import * as React from 'react'
import '../css/kaspa.css'
import '../css/animations.css';
import { IoMdCopy, IoMdMagnet } from "react-icons/io";
import { BsQrCode } from "react-icons/bs";

function InfoWallet () {
    return (
      <div className="App relaitve overflow-hidden">
        <div className='grid grid-cols-1 px-5 lg:px-60 lg:grid-cols-2 h-full w-full mt-20'>
            <div className='flex flex-col items-center'> 
                <p className='text-xl'>Available</p>
                <p className='text-4xl font-medium'>0 KAS</p>
                <p className='mt-3 text-sm'>Pending</p>
                <p className='text-xl font-medium'>0 KAS</p>
                <p className='text-left mt-20 font-medium text-md w-full'>Receive Address:</p>
                <div className='flex flex-row mt-3 gap-3 w-full'>
                  <p className='text-[#009688] text-left max-w-sm sm:max-w-md break-words'>kaspa:qzxs6s9vdflu8luk7e9eyq7860qwu7gkty38cqfk3tm5y8awd09k6w0k3y20r</p>
                  <IoMdCopy className='w-6 h-6 mt-[-7px]'/>
                </div>
                <div className='flex flex-row mt-10 w-full pr-20 items-end'>
                  <div className='flex font-medium flex-col justify-start items-start w-full px-5'>
                    <BsQrCode className='sm:w-40 sm:h-40 w-20 h-20 mt-10 shadow-md p-3 shadow-gray-700'/>
                  </div>
                  <div className='flex flex-row gap-7 justify-center items-center font-medium'>
                    <div className='bg-[#009688] px-5 border-[#009688] text-white rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer'>SEND</div>
                    <div className='bg-[#009688] w-40 border-[#009688] text-white rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer'>Scan QR Code</div>
                  </div>  
                </div>
                <div className='text-left font-medium w-full'>
                  <p className='mt-10'>Wallet Status: Online</p>
                  <p>DAA score: 86,252,568</p>
                </div>
            </div>
            <div className='flex'>
              Tabs
            </div>
        </div>
      </div>
    );
}

export default InfoWallet;
