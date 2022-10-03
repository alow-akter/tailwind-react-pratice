import React from 'react';
import img from '../images/images.jpg'
const Header = () => {
    return (
        <div className='bg-purple-300'>

            <div className='grid grid-cols-2 lg:grid-cols-7 p-12'>

                <div className='grid lg:col-span-4 lg:mx-6'>
                    <img className='w-full h-[200px] rounded-lg' src={img} alt="" />
                </div>

                <div className='grid  lg:col-span-4 items-center mt-12 lg:mt-0 '>
                    <h1 className='text-2xl font-semibold'>Select Your Best Player</h1>
                    <p>State Minister for Foreign Affairs Md Shahriar Alam, Bangladesh Ambassador to the USA Muhammad Imran and Bangladesh Permanent Representative to the UN Muhammad Abdul Muhith saw off the prime minister at the airport in Washington.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;