import React from "react";

function Navbar() {
  return (
    <>
      <div className='grid grid-cols-2 justify-between bg-black text-white p-4 mb-10'>
        <div className=''>
          <p className='text-2xl font-bold'>
            university<span className="text-red-500">Mart</span>
          </p>
        </div>
        <ul className=' flex flex-row gap-x-10 text-right ml-[20rem]'>
          <li className=''>Home</li>
          <li className=''>About</li>
          <li className=''>Service</li>
          <li className=''>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
