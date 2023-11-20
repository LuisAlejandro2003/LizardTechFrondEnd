import React, { useState, useEffect } from 'react'
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"
import profile from "../../../assets/rei.jpeg";

const Dashboard = () => {

    const [theme, setTheme] = useState("light");
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme]);
    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    const showProfile = () => {
        setOpen(!open)
    }

    return (
        <div className=''>
            <div className='flex items-center justify-end h-[70px]  bg-[#F8F9FA] shadow-lg px-[25px]  dark:bg-[#bfe0c1]'>
                <div className='flex items-center rounded-[5px] pr-10'>

                    <label class="relative inline-flex items-center cursor-pointer">
                        <input
                            class="sr-only peer"
                            value=""
                            type="checkbox"
                            onClick={handleChangeTheme}
                        />
                        <div
                            class="w-20 h-10 rounded-full ring-0 peer duration-500 outline-none bg-gray-200 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg shadow-gray-400 peer-checked:shadow-lg peer-checked:shadow-gray-700 peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[4px] after:right-1 after:translate-y-full after:w-10 after:h-10 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
                        ></div>
                    </label>

                </div>
                {/* <div className='flex items-center gap-[20px]'>
             
                    <div className='flex items-center gap-[15px] relative' onClick={showProfile}   >
                        <p>Rei</p>
                        <div className='h-[50px] w-[50px] rounded-full bg-[#ECF8EA] cursor-pointer flex items-center justify-center relative z-40' >
                            <img src={profile} alt="" />

                        </div>

                        {
                            open &&
                            <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Configuracion</p>
                                <p className='cursor-pointer hover:text-[blue] font-semibold'>Salir</p>
                            </div>

                        }
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Dashboard;