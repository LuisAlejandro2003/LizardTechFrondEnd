import { FaRegSun, FaWrench ,FaChevronRight} from "react-icons/fa"
import { Link } from "react-router-dom";


const SectionConfig = () => {
    return (
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[18px] font-extrabold leading-[16px] text-white/[0.4]'>Configuraciones</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white' /> <p className='text-[16 px] leading-[20px] font-normal text-white'>Parametros</p>
                </div>
                <FaChevronRight color='white' />
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <Link to="/statistics" className='flex items-center gap-[10px]'>
                    <FaWrench color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Probabilidad</p>
                </Link>
                <FaChevronRight color='white' />
            </div>
        </div>
    );
}

export default SectionConfig;