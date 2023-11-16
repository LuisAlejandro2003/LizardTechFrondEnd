import { Link } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";

const SectionUtilities = () => {
    return (
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> Utilidades</p>
            
            <Link to="/history" className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
                <FaRegCalendarAlt color='white' /> 
                <p className='text-[14px] leading-[20px] font-normal text-white'>Historial</p>
            </Link>
        </div>
    );
}

export default SectionUtilities;
