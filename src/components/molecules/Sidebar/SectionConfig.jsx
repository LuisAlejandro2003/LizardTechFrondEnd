import { FaRegSun, FaWrench ,FaChevronRight} from "react-icons/fa"

const SectionConfig = () => {
    return (
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>Configuraciones del habitad</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Parametros</p>
                </div>
                <FaChevronRight color='white' />
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaWrench color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Ajustes</p>
                </div>
                <FaChevronRight color='white' />
            </div>
        </div>
    );
}

export default SectionConfig;