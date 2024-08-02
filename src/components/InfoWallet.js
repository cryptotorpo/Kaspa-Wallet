import * as React from 'react'
import '../css/kaspa.css'
import '../css/animations.css';
import { IoMdCopy, IoMdMagnet } from "react-icons/io";
import { BsQrCode } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

function InfoWallet () {
    const copyTextToClipboard = () => {
      const textToCopy = "kaspa:qzxs6s9vdflu8luk7e9eyq7860qwu7gkty38cqfk3tm5y8awd09k6w0k3y20r";
      const tempInput = document.createElement('textarea');
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert("Copied");
    };

    return (
      <div className="App relaitve overflow-hidden">
        <img src="./kaspa.png" className='fixed left-2 top-2 w-8 h-8'></img>
        <FiLock className='fixed right-16 top-2 w-5 h-5'/>
        <IoLanguageOutline className='fixed right-10 top-2 w-5 h-5'/>
        <FaRegMoon className='fixed right-4 top-2 w-5 h-5'/>
        <div className='grid grid-cols-1 px-5 lg:px-60 lg:grid-cols-2 h-full w-full mt-20'>
            <div className='flex flex-col items-center'> 
                <p className='text-xl'>Available</p>
                <p className='text-4xl font-medium'>0 KAS</p>
                <p className='mt-3 text-sm'>Pending</p>
                <p className='text-xl font-medium'>0 KAS</p>
                <p className='text-left mt-20 font-medium text-md w-full'>Receive Address:</p>
                <div className='flex flex-row mt-3 gap-3 w-full'>
                  <p className='text-[#009688] text-left max-w-sm sm:max-w-md break-words'>kaspa:qzxs6s9vdflu8luk7e9eyq7860qwu7gkty38cqfk3tm5y8awd09k6w0k3y20r</p>
                  <IoMdCopy className='w-6 h-6 mt-[-7px] hover:cursor-pointer' onClick={() => copyTextToClipboard()}/>
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
            <div className='flex flex-col gap-5'>
              <div className='text-lg flex flex-row gap-5 border-b-[1px] justify-center'>
                <p className='hover:cursor-pointer border-b-[2px] pb-4 border-[#009688]'>TRANSACTIONS</p>
                <p className='hover:cursor-pointer'>WALLET</p>
                <p className='hover:cursor-pointer'>NETWORK</p>
                <p className='hover:cursor-pointer'>DEBUG</p>
              </div>
              <p className='text-center font-medium'>No Transactions</p>
            </div>
        </div>
      </div>
    );
}

export default InfoWallet;
