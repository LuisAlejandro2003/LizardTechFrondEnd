import React from 'react'
import { Link } from "react-router-dom";
import SectionConfig from '../../molecules/Sidebar/SectionConfig'
import SectionUtilities from '../../molecules/Sidebar/SectionUtilities'
import { FaTachometerAlt,  FaChevronLeft ,FaBolt} from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className='bg-[#2F5A28] px-[25px] h-screen'>

            {/* Dashboard title */}
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[25px] leading-[24px] font-extrabold cursor-pointer'>Admin Panel</h1>
            </div>
            <Link to="/home" className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <p className='text-[22px] leading-[20px] font-bold text-white'>Dashboard</p>
            </Link>

            {/* Sections  */}
            <SectionConfig></SectionConfig>
            <SectionUtilities></SectionUtilities>

            {/* icon */}
            <div className='pt-[20px]'>
                <div className='flex items-center justify-center'>
                    <div className='h-[50px] w-[50px] bg-[#5EB34F] rounded-full flex items-center justify-center cursor-pointer'>
                        <FaChevronLeft color='white' />
                    </div>
                </div>
            </div>

            {/* Card */}
            <div className='bg-[#B3E2AB] mt-[50px] flex items-center justify-center flex-col py-[15px] px-[20px] gap-[15px] rounded-[3px]'>
                <FaBolt color='white' />
                <p className='text-[12px] leading-[18px] font-normal text-black/[0.4] text-center'>Lorem ipsum dolor sit amet</p>
                <button className='bg-[#FFFF] text-black flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Cambiar plan</button>
            </div>
        </div>
    )
}

export default Sidebar