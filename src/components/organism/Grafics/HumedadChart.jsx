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
        Humedad: 30.5,
    },
    {
        name: '02:00',
        Humedad: 31.3,
    },
    {
        name: '04:00',
        Humedad: 32.7,
    },
    {
        name: '06:00',
        Humedad: 34.0,
    },
    {
        name: '08:00',
        Humedad: 36.2,
    },
    {
        name: '10:00',
        Humedad: 37.6,
    },
    {
        name: '12:00',
        Humedad: 38.1,
    },
    {
        name: '14:00',
        Humedad: 38.8,
    },
    {
        name: '16:00',
        Humedad: 39.2,
    },
    {
        name: '18:00',
        Humedad: 39.6,
    },
    {
        name: '20:00',
        Humedad: 40.0,
    },
    {
        name: '22:00',
        Humedad: 39.5,
    }
];


const HumedadChart = () => {
    const [temperatureState, setTemperature] = useState(false)

    const showTemperature = () => {
        setTemperature(!temperatureState)
    }

    return (<>
        <div className="flex mt-[22px] w-full gap-[30px]">
            <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
                <div className="bg-[#F8F9FC] flex items-center justify-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px] ">
                    <h2>Datos</h2>
                    <FaEllipsisV color="gray" className="cursor-poniter"></FaEllipsisV>
                </div>
                <div>
                    <LineChart
                        width={1600}
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
                        <YAxis domain={[25, 45]} ticks={[25, 30, 35, 40, 45]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Humedad" stroke="#82ca9d" activeDot={{ r: 8 }} />
                    </LineChart>






                </div>

                {
                    temperatureState &&
                    <Temperature></Temperature>

                }
            </div>

    
          
        </div>
    </>);
}

export default HumedadChart;