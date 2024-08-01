import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom';

import '../../css/kaspa.css';
import '../../css/animations.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="relative bg-transparent fadeIn">
      {({ open }) => (
        <>
          <div className="relative px-2 py-4 mx-auto cursor-pointer max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-between flex-1 mx-5 sm:items-stretch">
                <Link to='/'><div className="flex flex-row items-center flex-shrink-0 gap-4">
                  {/* <a href="/"> */}
                    <img
                      className="w-auto cursor-pointer h-7"
                      src="./img/kaspa.png"
                      alt="My logo"
                    />
                    <div className='text-2xl font-semibold text-white'>Kaspa Wallet</div>
                  {/* </a> */}
                </div></Link>
                <div className='relative flex flex-row items-center justify-center mr-5 font-medium gap-7'>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
