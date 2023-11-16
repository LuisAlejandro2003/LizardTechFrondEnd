import { FaCloud, FaCloudSun, FaEllipsisV , FaLightbulb} from "react-icons/fa"
import { FaTemperatureHigh } from "react-icons/fa"
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, Cell, Sector } from 'recharts';
import Cards from "../Cards/Cards";
import LocalPieChart from "../Grafics/PieChart";
import TemperatureChart from "../Grafics/TemperatureChart";
import HumedadChart from "../Grafics/HumedadChart";
import LuminosidadChart from "../Grafics/LuminosidadChart";





const Body = () => {


    const [temperatureState, setTemperature] = useState(false)

    const [selectedChart, setSelectedChart] = useState(<TemperatureChart />);

    const showTemperature = () => {
        setTemperature(!temperatureState)
    }


    //Cambiar grafica
    const showTemperatureChart = () => {
        setSelectedChart(<TemperatureChart />);
    };

    const showHumedadChart = () => {
        setSelectedChart(<HumedadChart />);
    };

    const showLuminosidadChart = () => {
        setSelectedChart(<LuminosidadChart />);
    };





    return (
        <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-[#5a5c69 text-[28px] leading-[34px] font-normal cursor-pointer'> Dashboard</h1>
                <button onClick={showTemperature} className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[30px] cursor-pointer'>Exportar tabla</button>
            </div>

            {/* Cards component */}

            <div className='grid grid-cols-3 gap-[30px] mt-[25px] pb-[15px]'>
                {/* card temperature*/}
                <div className="h-[100px] rounded-[8px]  bg-white border-t-[4px] border-[#4E73DF]  flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" onClick={showTemperatureChart}>
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">Temperatura</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">36 C°</h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color=""></FaTemperatureHigh>
                </div>
                {/* card humidity */}
                <div className="h-[100px] rounded-[8px]  bg-white  border-t-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" onClick={showHumedadChart}>
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">Humedad</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">37.6 %</h1>
                    </div>
                    <FaCloudSun fontSize={28} color=""></FaCloudSun>
                </div>
                {/* card luminosidad*/}
                <div className="h-[100px] rounded-[8px] bg-white border-t-[4px]  border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" onClick={showLuminosidadChart}>
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">Luminosidad</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">186 lx</h1>
                    </div>
                    <FaLightbulb fontSize={28} color=""></FaLightbulb>
                </div>
              
               
            </div>
       


            {/* grafica */}
            {selectedChart}


       

        </div>



    );
}

export default Body;