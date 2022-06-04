import React from 'react';
import hero from '../components/img/hero.png'
import star from '../components/img/star.png'
import progress0 from '../components/img/progress-0.png'
import progress1 from '../components/img/progress-1.png'
import progress2 from '../components/img/progress-2.png'
import star5 from '../components/img/star-5.png'
import star4 from '../components/img/star-4.png'
import star3 from '../components/img/star-3.png'
import star2 from '../components/img/star-2.png'
import star1 from '../components/img/star-1.png'
import course from '../components/img/course.png'
import thumbsup from '../components/img/thumbsup.png'
import time from '../components/img/time.png'
import certificate from '../components/img/certificate.png'
import book from '../components/img/book.png'
import question from '../components/img/question.png'
import saturn from '../components/img/saturn.png'
import platform from '../components/img/platform.png'
import Navbar from '../components/Navbar';


const Kelas = ()=>{
    return(
    <>
        <Navbar/>
        <div className='flex flex-row flex-wrap lg:flex-nowrap'>
            <div className='flex flex-col'>
                <img src={hero} alt = "missing img" className='mt-4 -ml-4'></img>
                <section className='ml-6'>
                    <h1 className='text-3xl font-semibold'>Mahir Membuat Tampilan Website Responsif #1</h1>
                    <p className='w-1/2 text-xl mt-4'>Mulai pelajari skill seorang Front-End Developer dengan membuat sebuah tampilan website yang responsif.</p>
                    <p className='text-xl mt-4 font-semibold'>Ulasan Kelas</p>
                    <div className='flex flex-row mt-4'>
                        <h1 className='text-6xl font-semibold mt-4'>4.9</h1>
                        <img className='h-1/2 mt-8 ml-4' src={star}  alt = "missing img"></img>
                        <div className='flex flex-col ml-4 mt-4'>
                            <img src={progress1}  alt = "missing img" className='mb-2'></img>
                            <img src={progress2}  alt = "missing img" className='mb-2'></img>
                            <img src={progress0}  alt = "missing img" className='mb-2'></img>
                            <img src={progress0}  alt = "missing img" className='mb-2'></img>
                            <img src={progress0}  alt = "missing img" className='mb-2'></img>
                        </div>
                        <div className='flex flex-col ml-4 mt-4'>
                            <img src={star5}  alt = "missing img" className='mb-1'></img>
                            <img src={star4}  alt = "missing img" className='mb-1'></img>
                            <img src={star3}  alt = "missing img" className='mb-1'></img>
                            <img src={star2}  alt = "missing img" className='mb-1'></img>
                            <img src={star1}  alt = "missing img" className='mb-1'></img>
                        </div>
                    </div>
                </section>

            </div>

            <div className='flex flex-col mt-4 border rounded-3xl border-black border-solid shadow-2xl'>
                <img src={course} alt='missing img'></img>
                <h3 className='text-3xl font-bold mt-4 ml-4'>Programming Course</h3>
                <h4 className='text-2xl font-semibold mt-4 ml-4'>Rp. 250.000,00</h4>
                <div className='flex flex-row'>
                    <button className='rounded py-2 px-16 mt-4 ml-4 font-xl font-bold text-white bg-purple-500'>Gabung Kelas</button>
                    <img className='h-1/2 mt-6 ml-4' src={thumbsup}></img>
                </div>
                <h5 className='text-xl ml-4 mt-4 font-semibold'>Paket Kelas</h5>
                <div className='flex flex-row ml-4 mt-4'>
                    <img src={time}></img>
                    <p className='ml-2'>Rata-rata penyelesaian kelas 21 jam</p>
                </div>
                <div className='flex flex-row ml-4 mt-4'>
                    <img src={certificate}></img>
                    <p className='ml-2'>Sertifikat elektronik</p>
                </div>
                <div className='flex flex-row ml-4 mt-4'>
                    <img src={book}></img>
                    <p className='ml-2'>Layanan waktu kelas selama 1 bulan penuh</p>
                </div>
                <div className='flex flex-row ml-4 mt-4'>
                    <img src={question}></img>
                    <p className='ml-2'>Quiz 20 buah</p>
                </div>
                
                <h5 className='text-xl ml-4 mt-4 font-semibold'>Fasilitas Kelas</h5>
                <div className='flex flex-row ml-4 mt-4'>
                    <img src={saturn}></img>
                    <p className='ml-2'>Internet 100%</p>
                </div>
                <div className='flex flex-row ml-4 mt-4'>
                    <img src={platform}></img>
                    <p className='ml-2'>Tersedia di berbagai platform</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Kelas ;