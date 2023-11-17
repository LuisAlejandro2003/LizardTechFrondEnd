import Sidebar2 from '../organism/Sidebar/Sidebar2';
import Dashboard from '../organism/DashboardView/Dashboard';
import React, { useState, useEffect } from 'react';

const History = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/data')
            .then((response) => response.json())
            .then((result) => {
                setData(result.datas);
            })
            .catch((error) => console.error('Error al obtener datos:', error));
    }, []);

    return (
        <div className='flex'>
            <div className='basis-[12%] h-[100vh]'>
                <Sidebar2></Sidebar2>
            </div>
            <div className='basis-[88%] border'>
                <Dashboard></Dashboard>
                <div class="p-5 h-screen bg-gray-100">
                    <h1 class="text-xl mb-2">Historial</h1>
                    <div class="overflow-auto rounded-lg shadow hidden md:block">
                        <table class="w-full">
                            <thead class="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Fecha</th>
                                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Hora</th>
                                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Temperatura</th>
                                    <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Humedad</th>
                                    <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">Luminosidad</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-100">
                                {data.map((item, index) => (
                                    <tr key={index} class="bg-white">
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                            <a href="#" class="font-bold text-blue-500 hover:underline">{index + 1}</a>
                                        </td>
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                            {item.fecha.substring(0, 15)}
                                        </td>
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item.hora}</td>
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">  {item.temperatura }C°</td>
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item.humedad }%</td>
                                        <td class="p-3 text-sm text-gray-700 whitespace-nowrap">{item.luxes }LX</td>

                                      
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default History;
