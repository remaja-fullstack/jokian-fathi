import React from 'react';
import chat from '../components/img/chats.png'
import group from '../components/img/groups.png'
import person from '../components/img/person.png'
import profile from '../components/img/profile.png'
import home from '../components/img/home.png'
import message from '../components/img/message.png'
import ring from '../components/img/ring.png'
import setting from '../components/img/setting.png'


const Chats = ()=>{

    return(
        <div className='flex flex-row'>

            <nav className='flex flex-col bg-customPurple py-2 px-10 ml-4 mt-2 mb-4 rounded-xl'>
                <img src={profile} alt = 'missing img'></img>
                <img src={home} alt = 'missing img' className='w-1/2 ml-6 mt-10'></img>
                <img src={message} alt = 'missing img' className='w-1/2 ml-6 mt-10'></img>
                <img src={ring} alt = 'missing img' className='w-1/2 ml-6 mt-10'></img>
                <img src={setting} alt = 'missing img' className='w-1/2 ml-6 mt-10'></img>
            </nav>

            
            <div className='flex flex-col'>

                <div class="flex justify-center">
                    <div class="mb-2 w-[490px]">
                        <div class="input-group relative flex flex-row items-stretch w-full">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-4 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-xl  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                    
                </div>
                <img className='' src={group}></img>
                <img className='' src={person}></img>
            </div>

            <img src = {chat}>
            
            </img>

        </div>
    );
}

export default Chats ;