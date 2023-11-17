import Sidebar2 from "../organism/Sidebar/Sidebar2";
import Dashboard from "../organism/DashboardView/Dashboard";
import React, { useState, useEffect } from 'react';

const Statistics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/data/temperature')
            .then((response) => response.json())
            .then((result) => {
                setData(result);
                console.log(result);
            })
            .catch((error) => console.error('Error al obtener datos:', error));
    }, []);

    return (
        <>
            <div className='flex'>
                <div className='basis-[12%] h-[100vh]'>
                    <Sidebar2></Sidebar2>
                </div>
                <div className='basis-[88%] border'>
                    <Dashboard></Dashboard>
                    <div>
                        <h1>La probabilidad de que la temperatura sea mayor a 35 grados es de {data.probabilidadMayor35Temperatura}%</h1>
                        <h1>La probabilidad de que la temperatura sea menor a 25 grados es de {data.probabilidadMenor25Temperatura}%</h1>
                        <h1>La probabilidad de que la humedad sea mayor a 40% es de {data.probabilidadMayor40Humedad}%</h1>
                        <h1>La probabilidad de que la humedad sea menor a 30% es de {data.probabilidadMenor30Humedad}%</h1>
                        <h1>La probabilidad de que la luminosidad sea mayor a 300 es de {data.probabilidadMayor300Luxes}%</h1>
                        <h1>La probabilidad de que la luminosidad sea menor a 100 es de {data.probabilidadMenor100Luxes}%</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;
