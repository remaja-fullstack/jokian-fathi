import React from 'react';
import arrow1 from '../components/img/arrow1.png'
import arrow2 from '../components/img/arrow2.png'
import bussiness from '../components/img/bussiness.png'
import bahasa from '../components/img/bahasa.png'
import hobby from '../components/img/hobby.png'
import cooking from '../components/img/cooking.png'
import engineer from '../components/img/engineer.png'
import socialmedia from '../components/img/socialmedia.png'
import datascience from '../components/img/datascience.png'
import star from '../components/img/star.png'
import Navbar from '../components/Navbar';

const Category = ()=>{

    return(

    <>
    <Navbar/>
    <div className='flex flex-row flex-wrap'>

        <div className='flex flex-col mx-4'>
            <h4 className='font-semibold text-3xl mb-4 mt-6'>Category</h4>
            <div className='flex flex-col border border-white border-solid rounded-xl shadow-xl'>
                <div className='flex flex-row mt-8'>
                    <img className='ml-4' src={bahasa}></img>
                    <p className='ml-4 text-3xl font-semibold'>Bahasa</p>
                </div>
                <div className='flex flex-row mt-6'>
                    <img className='ml-4' src={bussiness}></img>
                <p className='ml-2 text-3xl font-semibold'>Bisnis</p>
                </div>
                <div className='flex flex-row mt-6'>
                    <img className='ml-4' src={hobby}></img>
                <p className='ml-5 text-3xl font-semibold'>Hobi</p>
                </div>
                <div className='flex flex-row mt-6'>
                    <img className='ml-4' src={cooking}></img>
                <p className='ml-5 text-3xl font-semibold mr-2'>Pekerjaan Rumah</p>
                </div>
                <div className='flex flex-row mt-6 mb-16'>
                    <img className='ml-4' src={engineer}></img>
                <p className='ml-5 text-3xl font-semibold'>Teknologi</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col'>
            <h4 className='font-semibold text-3xl'>Lihat Kelas</h4>
            <img src={arrow1} alt='missing arrow'></img>
            <div className='flex flex-row flex-wrap'>
                <div className='flex flex-col border-4 border-solid border-black rounded-3xl'>
                    <img src={socialmedia}></img>
                    <h1 className='ml-6 font-bold'>Social Media Specialist</h1>
                    <p className='ml-6 w-1/2 mt-4'>Kelas mengenai cara menjadi expert di bidang social media </p>
                    <div className='flex flex-row ml-6 text-2xl mt-4'>
                        <img src={star}></img>
                        <p className='ml-2'>4.9</p>
                    </div>
                    <div className='rounded-2xl border-4 border-solid border-black mt-4 mx-6 text-xl text-center mb-4'>Rp. 250.000,00</div>
                </div>
                <div className='flex flex-col border-4 border-solid border-black rounded-3xl ml-4'>
                    <img src={datascience}></img>
                    <h1 className='ml-6 font-bold'>Data Science</h1>
                    <p className='ml-6 w-1/2 mt-4'>Kelas mengenai cara menjadi expert di bidang Data Science </p>
                    <div className='flex flex-row ml-6 text-2xl mt-4'>
                        <img src={star}></img>
                        <p className='ml-2'>4.9</p>
                    </div>
                    <div className='rounded-2xl border-4 border-solid border-black mt-4 mx-6 text-xl text-center mb-4'>Rp. 250.000,00</div>
                </div>
            </div>
            <img className='w-[30px] mx-auto my-10' src={arrow2} alt='missing img'></img>
            <p className='text-4xl font-bold mx-auto'>Swipe for more</p>
        </div>

    </div>
    </>
        
    );
}

export default Category ;