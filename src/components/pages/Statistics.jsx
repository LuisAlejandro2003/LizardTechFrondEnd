import Sidebar from "../organism/Sidebar/Sidebar";
import Dashboard from "../organism/DashboardView/Dashboard";
import React, { useState, useEffect } from 'react';


const Statistics = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/data/temperature')
            .then((response) => response.json())
            .then((result) => {
                setData(result.probabilidadMayor35);
                console.log(result.probabilidadMayor35)
            })
            .catch((error) => console.error('Error al obtener datos:', error));
    }, []);



    
    return (
        <>
            <div className='flex'>
                <div className='basis-[12%] h-[100vh]'>
                    <Sidebar></Sidebar>
                </div>
                <div className='basis-[88%] border'>
                    <Dashboard></Dashboard>
                    <div>
                     <h1>La probabilidad de que la temperatura sea mayor a 35 grados es de {data}%</h1>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistics;