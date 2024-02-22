import Sidebar2 from "../organism/Sidebar/Sidebar2";
import Dashboard from "../organism/DashboardView/Dashboard";
import { FaCloudSun, FaLightbulb } from "react-icons/fa";
import { FaTemperatureHigh } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

const Statistics = () => {
    const [data, setData] = useState([]);

    const [mediaData, setMediaData] = useState([]);

    useEffect(() => {
        // Obtener el token del localStorage
        const token = localStorage.getItem('token');

        // Verificar si hay un token antes de realizar la solicitud
        if (token) {
            fetch('http://34.233.172.135:8080/api/data/temperature', {
                headers: {
                    'x-token': token,
                },
            })
                .then((response) => response.json())
                .then((result) => {
                    setData(result);
                    console.log(result);
                })
                .catch((error) => console.error('Error al obtener datos:', error));
        } else {
            console.error('No se encontró el token en el localStorage');
        }
    }, []);



useEffect(() => {
    // Obtener el token del localStorage
    const token = localStorage.getItem('token');

    // Verificar si hay un token antes de realizar la solicitud
    if (token) {
        fetch('http://34.233.172.135:8080/api/data/media', {
            headers: {
                'x-token': token,
            },
        })
            .then((response) => response.json())
            .then((result) => {
                setMediaData(result);
                console.log(result);
            })
            .catch((error) => console.error('Error al obtener datos de media:', error));
    } else {
        console.error('No se encontró el token en el localStorage');
    }
}, []);


    return (
        <>
            <div className='flex'>
                <div className='basis-[12%] h-[100vh]'>
                    <Sidebar2></Sidebar2>
                </div>
                <div className='basis-[88%] border'>
                    <Dashboard></Dashboard>

                    <div className="p-5 h-screen flex justify-center items-start  bg-[#F8F9FA]">
                        <div className="w-[70%]">
                            <div className="w-full flex justify-center items-center">
                                <p className="font-semibold pb-14 pt-2 text-[#2D3748] text-[22px] ">Probabilidades</p>
                            </div>
                            {/* mayores */}
                            <div className=" grid-cols-3 gap-4 mx-auto flex justify-center">

                                <div className="pb-8 w-[75%]">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Temperatura mayor a 35 °C </h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{data.probabilidadMayor35Temperatura} %</h1>
                                        </div>
                                        <FaTemperatureHigh fontSize={28} color="#b32426"></FaTemperatureHigh>
                                    </div>
                                </div>
                                <div className="pb-8 w-[75%]">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Humedad mayor a 75%</h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]"> {data.probabilidadMayor40Humedad} % </h1>
                                        </div>
                                        <FaCloudSun fontSize={28} color="#2e2b75"></FaCloudSun>
                                    </div>
                                </div>
                                <div className="pb-8 w-[75%] ">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Luminosidad mayor a 300LX</h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]"> {data.probabilidadMayor300Luxes} % </h1>
                                        </div>
                                        <FaLightbulb fontSize={28} color="#efce45"></FaLightbulb>
                                    </div>
                                </div>
                            </div>


                            {/* menores */}
                            <div className=" grid-cols-3 gap-4 mx-auto flex justify-center pt-12">

                                <div className="pb-8 w-[75%]">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Temperatura menor a 25 °C </h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{data.probabilidadMenor25Temperatura} %</h1>
                                        </div>
                                        <FaTemperatureHigh fontSize={28} color="#b32426"></FaTemperatureHigh>
                                    </div>
                                </div>
                                <div className="pb-8 w-[75%]">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Humedad menor a 60%</h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{data.probabilidadMenor30Humedad} % </h1>
                                        </div>
                                        <FaCloudSun fontSize={28} color="#2e2b75"></FaCloudSun>
                                    </div>
                                </div>
                                <div className="pb-8 w-[75%] ">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Luminosidad menor a 100LX</h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{data.probabilidadMenor100Luxes} % </h1>
                                        </div>
                                        <FaLightbulb fontSize={28} color="#efce45"></FaLightbulb>
                                    </div>
                                </div>
                            </div>



                            {/* medias */}
                            <div className="w-full flex justify-center items-center pt-11">
                            <p className="font-semibold pb-14 pt-2 text-[#2D3748] text-[22px]   ">Media en los ultimos 30 dias</p>
                            </div>
                            <div className=" grid-cols-3 gap-4 mx-auto flex justify-center pt-12">

                                <div className="pb-8 w-[75%]">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Temperatura</h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{mediaData.mediaTemperatura} %</h1>
                                        </div>
                                        <FaTemperatureHigh fontSize={28} color="#b32426"></FaTemperatureHigh>
                                    </div>
                                </div>
                                <div className="pb-8 w-[75%]">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Humedad</h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{mediaData.mediaHumedad} % </h1>
                                        </div>
                                        <FaCloudSun fontSize={28} color="#2e2b75"></FaCloudSun>
                                    </div>
                                </div>
                                <div className="pb-8 w-[75%] ">
                                    <div className="h-[100px] rounded-[8px] bg-[#ffff] border-t-[4px]  border-[#4FD1C5] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out" >
                                        <div>
                                            <h2 className="text-[#4FD1C5] text-[14px] leading-[17px] font-bold">Luminosidad</h2>
                                            <h1 className="text-[20px] leading-[24px] font-bold text-[#black] mt-[5px]">{mediaData.mediaLuxes} % </h1>
                                        </div>
                                        <FaLightbulb fontSize={28} color="#efce45"></FaLightbulb>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;

