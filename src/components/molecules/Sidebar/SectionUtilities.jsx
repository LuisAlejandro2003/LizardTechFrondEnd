import {  FaRegChartBar, FaRegCalendarAlt } from "react-icons/fa"
const SectionUtilities = () => {
    return (

        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> Utilidades</p>

            <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer'>
                <FaRegChartBar color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Tablas</p>
            </div>
            {/* <div className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
                <FaRegCalendarAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Historial</p>
            </div> */}
        </div>
    );
}

export default SectionUtilities;