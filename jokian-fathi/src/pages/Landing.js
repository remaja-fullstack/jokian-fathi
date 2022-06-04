import Logo from '../components/img/logo.svg'
import Api from '../components/img/api.png'
import Navbar from '../components/Navbar'
import Code1 from '../components/img/code1.png'
import Rate from '../components/img/rate.png'
import Star from '../components/img/Bintang.png'
import Finance from '../components/img/Ellipse1.png'
import Cooking from '../components/img/Ellipse 4.png'
import Business from '../components/img/Ellipse 5.png'
import Foto1 from '../components/img/foto1.png'
import Foto2 from '../components/img/foto2.png'
import Foto3 from '../components/img/foto3.png'
import Programming from '../components/img/Ellipse 6.png'
import Poly from '../components/img/Polygon 4.png'

import Banner1 from '../components/img/banner1.png'
import Banner2 from '../components/img/banner2.png'
import Banner3 from '../components/img/banner3.png'

import ovo from '../components/img/ovo.png'
import mandiri from '../components/img/mandiri.png'
import gopay from '../components/img/gopay.png'
import linkaja from '../components/img/linkaja.png'
import bca from '../components/img/bca.png'
import dana from '../components/img/dana.png'

const Landing = () => {
    return(
        <>
        <Navbar/>

        {/* menu */}
        <div className='flex flex-row mx-10 flex-wrap'>
            <a href="" className='mr-24 font-bold py-6'>Category</a>
            <a href="" className='mr-12 font-semibold py-6'>Trending</a>
            <a href="" className='mr-12 font-semibold py-6'>Popular</a>
            <a href="" className='mr-12 font-semibold py-6'>Voucher</a>
            <a href="" className='mr-12 font-semibold py-6'>Subscribe</a>
            <a href="" className='mr-12 font-semibold py-6'>Sertifikat</a>
            <a href="" className='mr-12 font-semibold py-6'>Chats</a>
            <a href="" className='mr-12 font-semibold py-6'>Payment</a>
            <a href="" className='mr-12 font-semibold py-6'>Testimonials</a>
            <a href="" className='mr-12 font-semibold py-6'>Contact</a>
        </div>
        <div className='bg-landing items-center mx-10 bg-no-repeat bg-cover pb-8 rounded-[30px]'>
            <img
            className='h-auto'
            src={Logo}
            alt='missing logo'
            >
            </img>
            <h1 className='font-bold text-4xl text-white text-center px-10'>Rencanakan Perjalanan Karirmu Sejak Dini Bersama Kami</h1>
            <p className='text-white text-lg font-bold text-left mt-10 mx-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, massa, nulla pellentesque fringilla. Feugiat lorem sit ultrices vulputate egestas massa cursus eget. Id blandit non, viverra eget odio tellus augue mauris ipsum. Adipiscing consequat consectetur dis neque, urna et mauris dictum fermentum.</p>
        </div>

        <div className='flex flex-row justify-between'>
            <button className='bg-customPurple border-2 border-black text-white py-3 px-24 rounded-2xl text-2xl shadow-2xl my-10 ml-10 mr-8 hidden md:flex'>Redeem Voucher</button>

            <button className='bg-customPurple border-2 border-black text-white py-3 px-24 rounded-2xl text-2xl shadow-2xl my-10 ml-10 mr-8 hidden md:flex'>Print Certificate</button>

            <button className='bg-customPurple border-2 border-black text-white py-3 px-24 rounded-2xl text-2xl shadow-2xl my-10 ml-10 mr-8 hidden xl:flex'>Subscribe</button>
        </div>
        <div className='mx-10'>
            <div className='flex flex-row'>
                <h1 className='font-bold text-3xl mt-8'>Trending</h1>
                <img
                    className='w-24 h-auto '
                    src={Api}
                    alt='missing logo'
                >
                </img>
            </div>
            <div className='flex flex-row  flex-wrap'>
                <div className='border-2 border-black shadow-md shadow-black w-80 h-auto rounded-xl mr-20 mb-10 mx-auto items-center'>
                <img
                    className='h-auto w-[420px]'
                    src={Code1}
                    alt='missing logo'
                >
                </img>
                <h1 className='font-bold text-center text-lg my-2'>Social Media Specialist</h1>
                <p className='text-left text-base w-48 content-center ml-10 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <img
                    className='h-auto w-14 ml-10 mt-2'
                    src={Rate}
                    alt='missing logo'
                >
                </img>
                <div className='border-1 border-black rounded-lg w-52 border-2 items-center mx-auto my-4'>
                    <h3 className='text-center'>Rp. 250.000,00</h3>
                </div>
                
                </div>

                <div className='border-2 border-black shadow-md shadow-black w-80 h-auto rounded-xl mr-20 mb-10 mx-auto items-center'>
                <img
                    className='h-auto w-[420px]'
                    src={Code1}
                    alt='missing logo'
                >
                </img>
                <h1 className='font-bold text-center text-lg my-2'>Social Media Specialist</h1>
                <p className='text-left text-base w-48 content-center ml-10 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <img
                    className='h-auto w-14 ml-10 mt-2'
                    src={Rate}
                    alt='missing logo'
                >
                </img>
                <div className='border-1 border-black rounded-lg w-52 border-2 items-center mx-auto my-4'>
                    <h3 className='text-center'>Rp. 250.000,00</h3>
                </div>
                
                </div>

                <div className='border-2 border-black shadow-md shadow-black w-80 h-auto rounded-xl mr-20 mb-10 mx-auto items-center'>
                <img
                    className='h-auto w-[420px]'
                    src={Code1}
                    alt='missing logo'
                >
                </img>
                <h1 className='font-bold text-center text-lg my-2'>Social Media Specialist</h1>
                <p className='text-left text-base w-48 content-center ml-10 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <img
                    className='h-auto w-14 ml-10 mt-2'
                    src={Rate}
                    alt='missing logo'
                >
                </img>
                <div className='border-1 border-black rounded-lg w-52 border-2 items-center mx-auto my-4'>
                    <h3 className='text-center'>Rp. 250.000,00</h3>
                </div>
                
                </div>
            </div>
            
        </div>
        <div className='mx-10 mt-10'>
            <div className='flex flex-row'>
                <h1 className='font-bold text-3xl mt-3'>Popular</h1>
                <img
                    className='w-24 h-auto '
                    src={Star}
                    alt='missing logo'
                >
                </img>
            </div>
            <div className='mt-5 flex flex-row flex-wrap'>
                <div className='border-4 border-black rounded-lg bg-customPurple shadow-lg w-48 pb-2 place-self-center mx-auto items-center mb-5' >
                    <img
                    className='w-auto h-44'
                    src={Finance}
                    alt='missing logo'
                    >
                    </img>
                    <h1 className='text-white font-semibold text-center text-2xl'> Finance </h1>
                </div> 

                <div className='border-4 border-black rounded-lg bg-customPurple shadow-lg w-48 pb-2 place-self-center mx-auto items-center mb-5' >
                    <img
                    className='w-auto h-44'
                    src={Cooking}
                    alt='missing logo'
                    >
                    </img>
                    <h1 className='text-white font-semibold text-center text-2xl'> Cooking </h1>
                </div> 

                <div className='border-4 border-black rounded-lg bg-customPurple shadow-lg w-48 pb-2 place-self-center mx-auto items-center mb-5' >
                    <img
                    className='w-auto h-44'
                    src={Business}
                    alt='missing logo'
                    >
                    </img>
                    <h1 className='text-white font-semibold text-center text-2xl'> Business </h1>
                </div> 

                <div className='border-4 border-black rounded-lg bg-customPurple shadow-lg w-48 pb-2 place-self-center mx-auto items-center mb-5' >
                    <img
                    className='w-auto h-44'
                    src={Programming}
                    alt='missing logo'
                    >
                    </img>
                    <h1 className='text-white font-semibold text-center text-2xl'> Programming </h1>
                </div> 

                
            </div>
            <button className='border-4 rounded-xl border-black shadow-lg py-3 px-5 my-10 flex content-center items-center mx-auto'>Find Another Category</button>
            
        </div>
        <div className='py-20 bg-[#F3F3F3] mx-5 rounded-2xl'>
            <h3 className='font-semibold text-center text-lg'>PLUS</h3>
            <h1 className='font-semibold text-center text-6xl py-5 tracking-wide'>Unlock all courses, 
            <br/>for the better future</h1>

            <div className='flex flex-row flex-wrap justify-center bg-[#A2A2A2] w-2/4 rounded-xl py-4 mx-auto items-center'>
                <h3 className='text-xl font-semibold pr-2'>ANNUAL </h3>

                <img
                    className='w-5 h-5 pt-2 '
                    src={Poly}
                    alt='missing logo'
                >
                </img>
                <h3 className='text-xl font-semibold pl-2 text-center'> | Subscribe For Rp 2.500.000,00</h3>
            </div>
            <h1 className='text-center font-semibold py-5 text-lg'>View what’s included</h1>

            <h1 className='text-center font-semibold pb-5 text-lg text-slate-400'>The standard VAT rate may be charged, following the law of your country</h1>
        </div>

        <div className=' bg-[#A2A2A2] mt-10 py-14'>
            <h1 className='font-extrabold text-4xl text-center'>Testimonials</h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-6 mx-24 mt-10'>
                <div className='border-2 border-black rounded-t-[80px] w-80 bg-white mx-auto items-center pt-10 shadow-xl'>
                <img
                    className='w-auto h-44 mx-auto '
                    src={Foto1}
                    alt='missing logo'
                    >
                    </img>
                    <p className='ml-16 my-6 text-left'>
                    Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit.
                    </p>
                    <h1 className='font-bold ml-16'>Windah Musang</h1>
                    <h2 className='font-bold text-slate-300 ml-16 pb-6'>Raja Kematian</h2>
                </div>

                <div className='border-2 border-black rounded-t-[80px] w-80 bg-white mx-auto items-center pt-10 shadow-xl'>
                <img
                    className='w-auto h-44 mx-auto '
                    src={Foto2}
                    alt='missing logo'
                    >
                    </img>
                    <p className='ml-16 my-6 text-left'>
                    Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit.
                    </p>
                    <h1 className='font-bold ml-16'>Windah Emosi</h1>
                    <h2 className='font-bold text-slate-300 ml-16 pb-6'>Botak No Counter</h2>
                </div>

                <div className='border-2 border-black rounded-t-[80px] w-80 bg-white mx-auto items-center pt-10 shadow-xl'>
                <img
                    className='w-auto h-44 mx-auto '
                    src={Foto3}
                    alt='missing logo'
                    >
                    </img>
                    <p className='ml-16 my-6 text-left'>
                    Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit.
                    </p>
                    <h1 className='font-bold ml-16'>Windah Teraniaya</h1>
                    <h2 className='font-bold text-slate-300 ml-16 pb-6'>Ketipu Bocil</h2>
                </div>
                
            </div>

        </div>

        <div className='bg-black w-full flex mt-14'>
                <img
                    className='w-40 h-auto mr-20'
                    src={Logo}
                    alt='missing logo'
                >
                
                </img>
                
        </div>
        <div className='mx-10 my-10 flex flex-row flex-wrap'>
            <div className=''>
                <h1 className='font-bold text-2xl pb-5'>Popular Course</h1>
                <div className='flex flex-row'>
                    <img
                    className='w-auto h-44 '
                    src={Banner1}
                    alt='missing logo'
                    >
                    </img>
                    <div className='ml-2'>
                        <h1 className='font-bold text-xl pt-3'>Science Data</h1>
                        <p className=' text-left text-lg pt-2'>
                            Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit.
                        </p>
                    </div>
                    
                </div>

                <div className='flex flex-row'>
                    <img
                    className='w-auto h-44 mx-auto '
                    src={Banner2}
                    alt='missing logo'
                    >
                    </img>
                    <div className='ml-2'>
                        <h1 className='font-bold text-xl pt-3'>Social Media Specialist</h1>
                        <p className=' text-left text-lg pt-2'>
                            Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit.
                        </p>
                    </div>
                    
                </div>

                <div className='flex flex-row'>
                    <img
                    className='w-auto h-44'
                    src={Banner3}
                    alt='missing logo'
                    >
                    </img>
                    <div className='ml-2'>
                        <h1 className='font-bold text-xl pt-3'>Programming</h1>
                        <p className=' text-left text-lg pt-2'>
                            Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit.
                        </p>
                    </div>
                    
                </div>
            </div>
            <div className='lg:ml-24'>
                <h1 className='font-bold  text-2xl pb-10'>Payment Method</h1>
                <div className='grid grid-cols-2 gap-24'>
                <img
                    className='w-48'
                    src={bca}
                    alt='missing logo'
                    >
                    </img>
                    <img
                    className='w-48'
                    src={mandiri}
                    alt='missing logo'
                    >
                    </img>
                    <img
                    className='w-48'
                    src={dana}
                    alt='missing logo'
                    >
                    </img>
                    <img
                    className='w-48'
                    src={gopay}
                    alt='missing logo'
                    >
                    </img>
                    <img
                    className='w-48'
                    src={ovo}
                    alt='missing logo'
                    >
                    </img>
                    <img
                    className='w-48'
                    src={linkaja}
                    alt='missing logo'
                    >
                    </img>
                </div>
            </div>
            
        </div>
        <div>

        </div>

        </>
    )
}
export default Landing