import { FaEllipsisV } from "react-icons/fa"
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Pie, Cell, Sector } from 'recharts';
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
        Luminosidad: 240,
    },
    {
        name: '02:00',
        Luminosidad: 220,
    },
    {
        name: '04:00',
        Luminosidad: 140,
    },
    {
        name: '06:00',
        Luminosidad: 174,
    },
    {
        name: '08:00',
        Luminosidad: 186,
    },
    {
        name: '10:00',
        Luminosidad: 200,
    },
    {
        name: '12:00',
        Luminosidad: 220,
    },
    {
        name: '14:00',
        Luminosidad: 230,
    },
    {
        name: '16:00',
        Luminosidad: 168,
    },
    {
        name: '18:00',
        Luminosidad: 141,
    },
    {
        name: '20:00',
        Luminosidad: 132,
    },
    {
        name: '22:00',
        Luminosidad: 123,
    }
];



const LuminosidadChart = () => {
    const [temperatureState, setTemperature] = useState(false)

  
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
                        <YAxis domain={[0, 500]} ticks={[0, 100, 200, 300, 400, 500]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Luminosidad" stroke="#36B9CC" activeDot={{ r: 8 }} />
                    </LineChart>






                </div>

              
            </div>

         
        </div>
    </>);
}

export default LuminosidadChart;