import { FaCloudSun, FaLightbulb } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import io from "socket.io-client";
import TemperatureChart from "../Grafics/TemperatureChart";
import HumedadChart from "../Grafics/HumedadChart";
import LuminosidadChart from "../Grafics/LuminosidadChart";

const Body = () => {
    const [temperatureState, setTemperature] = useState(null);
    const [humidityState, setHumidity] = useState(null);
    const [luxesState, setLuxes] = useState(null);
    const [selectedChart, setSelectedChart] = useState(<TemperatureChart />);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://34.230.157.214:3000');

        newSocket.on("nuevos-datos", (data) => {
            console.log('Datos recibidos desde el socket:', data);

            // Actualiza el estado según los datos recibidos
            setTemperature(data.temperatura);
            setHumidity(data.humedad);
            setLuxes(data.luxes);
        });

        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        };
    }, []);

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
        <div className='pt-[25px] px-[25px] h-[93vh]  bg-[#F8F9FA] dark:bg-[#bfe0c1] '>
     

            <div className='grid grid-cols-3 gap-[30px] mt-[25px] pb-[15px]'>
                <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" onClick={showTemperatureChart}>
                    <div>
                        <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Temperatura</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{temperatureState} C°</h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color="#b32426"></FaTemperatureHigh>
                </div>
                
                <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" onClick={showHumedadChart}>
                    <div>
                        <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Humedad</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{humidityState} %</h1>
                    </div>
                    <FaCloudSun fontSize={28} color="#2e2b75"></FaCloudSun>
                </div>
                
                <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" onClick={showLuminosidadChart}>
                    <div>
                        <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Luminosidad</h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{luxesState} lx</h1>
                    </div>
                    <FaLightbulb fontSize={28} color="#efce45"></FaLightbulb>
                </div>
            </div>

            {selectedChart}
        </div>
    );
}

export default Body;
