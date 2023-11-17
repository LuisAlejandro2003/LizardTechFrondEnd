import React, { useState , useEffect } from 'react'
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa"
import profile from "../../../assets/rei.jpeg";

const Dashboard = () => {

    const [theme, setTheme] = useState("light");
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        }else{
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
            <div className='flex items-center justify-end h-[70px]  bg-[#ECF8EA] shadow-lg px-[25px]  dark:bg-[#bfe0c1]'>
                <div className='flex items-center rounded-[5px] pr-10'>
                    <button onClick={handleChangeTheme} className='bg-[#5EB34F] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Cambiar tema</button>

                </div>
                <div className='flex items-center gap-[20px]'>
             
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
                </div>
            </div>
        </div>
    );
}

export default Dashboard;