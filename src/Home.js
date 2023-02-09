import React from 'react'
import image from '../src/images/login.png'

const Home = () => {
    return (
        <div className='h-[100vh] bg-[#679796] flex justify-center items-center'>
            <div className='w-4/5 h-4/5 flex items-center rounded-lg'
                style={{
                    background: `linear-gradient(
    95deg,
    #205a63 0%,
    #205a63 46%,
    #ffba33 46%,
    #ffba33 100%
  )`}}>
                <div className='w-1/2 '>
                   <img src={image} className='h-1/2 w-4/5'/>
                </div>
                <div className=' w-1/2 justify-center items-center flex flex-col'>
                    <div className='bg-white  rounded-lg max-w-sm shadow-black/20 shadow-xl'>
                        <div className='flex justify-between py-6 rounded-t-lg px-4 bg-white shadow-black/10 shadow-lg'>
                            <h4 className='font-medium text-yellow-500'>ALREADY MEMBERS?</h4>
                            <h4 className='text-gray-400 font-medium'>Need help?</h4>
                        </div>
                        <div className='mt-5 px-4 py-4'>


                            <input className='py-3 px-2 text-[#1a535c]  bg-gray-100 w-full border border-gray-200 outline-none' placeholder='Enter your username'></input>
                            <input className='py-3 px-2 text-[#1a535c] my-3 bg-gray-100 w-full border border-gray-200 outline-none' placeholder='Enter your password'></input>

                            <button className='w-full mb-4 mt-5 rounded-md font-medium bg-[#1a535c] py-4 text-center text-white'>SIGN IN</button>
                        </div>
                    </div>

                    <div className=' text-center mt-10'>
                        <h4 className='text-gray-100 font-medium'>Don't have account yet?</h4>
                        <h4 className='text-[#1a535c] font-medium'>Create an account</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home