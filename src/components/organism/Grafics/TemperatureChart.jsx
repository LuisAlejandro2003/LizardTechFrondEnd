import { FaEllipsisV } from "react-icons/fa"
import { FaTemperatureHigh } from "react-icons/fa"
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, Cell, Sector } from 'recharts';
import Cards from "../Cards/Cards";
import LocalPieChart from "../Grafics/PieChart";
import Temperature from "../Grafics/TemperatureChart";


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const pie = [

    {
        name: 'x',
        C: 3000,
        Humedad: 1398,
        amt: 2210,
    },
    {
        name: 'y',
        C: 2000,
        Humedad: 9800,
        amt: 2290,
    },
    {
        name: 'z',
        C: 2780,
        Humedad: 3908,
        amt: 2000,
    },
    {
        name: 'a',
        C: 2780,
        Humedad: 3908,
        amt: 2000,
    },




];
const data = [
    {
        name: '00:00',
        C: 30.5,
    },
    {
        name: '02:00',
        C: 28.3,
    },
    {
        name: '04:00',
        C: 29.7,
    },
    {
        name: '06:00',
        C: 27.8,
    },
    {
        name: '08:00',
        C: 31.2,
    },
    {
        name: '10:00',
        C: 32.6,
    },
    {
        name: '12:00',
        C: 34.1,
    },
    {
        name: '14:00',
        C: 30.0,
    },
    {
        name: '16:00',
        C: 33.2,
    },
    {
        name: '18:00',
        C: 30.9,
    },
    {
        name: '20:00',
        C: 34.0,
    },
    {
        name: '22:00',
        C: 32.4,
    }


];
const TemperatureChart = () => {

 

    return (<>
        <div className="flex mt-[22px] w-full gap-[30px]">
            <div className="basis-[100%] border bg-white shadow-md cursor-pointer rounded-[4px]">
                <div className="bg-[#F8F9FC] flex items-center justify-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] ">
                    <h2>Datos</h2>
                    <FaEllipsisV color="gray" className="cursor-poniter"></FaEllipsisV>
                </div>
                <div>
                    <LineChart
                        width={1700}
                        height={500}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[15, 40]} ticks={[15, 20, 25, 30, 35, 40]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="C" stroke="#8884d8" activeDot={{ r: 8 }} />
                   
                    </LineChart>
                </div>
            </div>
        </div>
        </>);
}

export default TemperatureChart;