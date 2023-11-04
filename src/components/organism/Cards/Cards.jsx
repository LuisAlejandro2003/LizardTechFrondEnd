import {FaTemperatureHigh , FaTint} from "react-icons/fa"
const Cards = () => {
    return ( 
        <>
         {/* container card */}
         <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
                {/* card temperature*/}
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">Temperatura</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">36 C°</h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color=""></FaTemperatureHigh>
                </div>
                {/* card humidity */}
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">Humedad</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">36 C°</h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color=""></FaTemperatureHigh>
                </div>
                {/* card luminosidad*/}
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">Luminosidad</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">36 C°</h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color=""></FaTemperatureHigh>
                </div>
                {/* card general*/}
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">Datos generales</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">36 C°</h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color=""></FaTemperatureHigh>
                </div>
            </div>
        
        </>
     );
}
 
export default Cards;