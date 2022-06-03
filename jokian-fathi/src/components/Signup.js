import React from 'react';
import Logo from '../components/img/logo.png';
import bg from '../components/img/login-bg.png'
import arrow from '../components/img/arrow.png'
import google from '../components/img/google.png'
import facebook from '../components/img/facebook.png'
import { Link } from 'react-router-dom';

const Signup = ()=>{

    return(

        <div className='bg-black font-montserrat w-full'>
            <img src={Logo} alt='missing logo' className=''></img>

            <div className='flex flex-row'>
                <img src={bg} alt='missing bg' className='hidden lg:flex'></img>
                <div className='bg-white rounded-[56px] md:mx-auto lg:mr-4'>

                    <div className='flex flex-row ml-80 mt-4 mr-6'>
                        <p className='text-xl text-gray-400'>English (UK)</p>
                        <img src={arrow} alt='missing arrow' className='h-1/2 mt-2 ml-2'></img>
                    </div>

                    <h1 className='text-2xl ml-20 mr-4 my-12'>Create Account</h1>

                    <div className='flex flex-row ml-20 mr-4'>
                        <div className='flex flex-row mr-4 border border-solid border-black rounded-lg'>
                            <img src={google} className='ml-2 my-2'></img>
                            <p className='mt-3 mx-2'>Login with Google</p>
                        </div>
                        <div className='flex flex-row border border-solid border-black rounded-lg'>
                            <img src={facebook} className='ml-2 my-2'></img>
                            <p className='mt-3 mx-2'>Login with Facebook</p>
                        </div>
                    </div>

                    <p className='ml-72 my-12'>-OR-</p>

                    <form className='flex flex-col'>
                        <input type='text' placeholder='Fullname' className='ml-20 mr-4 mb-12 py-4 px-2'></input>
                        <input type='text' placeholder='Email Address' className='ml-20 mr-4 mb-12 py-4 px-2'></input>
                        <input type='text' placeholder='Password' className='ml-20 mr-4 py-4 px-2'></input>
                    </form>

                    <button type='button' className='mb-4 mt-20 mr-4 ml-20 rounded-lg py-4 px-48 bg-black text-white'>
                        Sign Up
                    </button>

                    <div className='flex flex-row ml-20 mr-4 mt-4 text-gray-400'>
                        <p>Already have an Account?</p>
                        <Link to='/login' className='ml-4'>Login</Link>
                    </div>


                </div>
            </div>
            

        </div>   
    );
}

export default Signup ;