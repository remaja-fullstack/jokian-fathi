import Logo from '../components/img/logo.svg'
import Search from '../components/img/search.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <div className='bg-black w-full flex flex-row justify-around'>

                <Link to='/'>
                    <img
                        className='w-40 h-auto mr-20'
                        src={Logo}
                        alt='missing logo'
                    >
                    
                    </img>
                </Link>
               
                <div class=" search flex justify-between items-center align-middle">
                    <div class="xl:w-96">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none" placeholder="Find Course" aria-label="Search" aria-describedby="button-addon2"/>
                            <span>
                            <img
                                className='absolute right-3 top-2'
                                alt="missing logo"
                                src={Search}
                            >
                            
                            </img>
                            </span>
                            
                    
                        </div>
                    </div>
                    
                </div>
                <div className='justify-end mt-8'>
                    <Link to='/signup' className ='py-2 px-5 bg-customPurple w-32 h-10 font-bold text-white rounded justify-end mr-3'>
                        Sign Up
                    </Link>
                    <Link to='/login' className='py-2 px-5 bg-customPurple w-32 h-10 font-bold text-white rounded'>
                        Login
                    </Link>
                    </div>
            </div>
        </>
    )
}
export default Navbar