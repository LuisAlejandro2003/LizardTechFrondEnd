import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { FaEllipsisV } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const initialData = [
    {
        name: '00:00',

    },
    {
        name: '02:00',

    },
    {
        name: '04:00',

    },
    {
        name: '06:00',
    
    },
    {
        name: '08:00',

    },
    {
        name: '10:00',

    },
    {
        name: '12:00',

    },
    {
        name: '14:00',

    },
    {
        name: '16:00',

    },
    {
        name: '18:00',

    },
    {
        name: '20:00',

    },
    {
        name: '22:00',

    }
];

const TemperatureChart = () => {
    const [chartData, setChartData] = useState(initialData);

    const newSocket = io('http://localhost:3001');

    useEffect(() => {
        newSocket.on('nuevos-datos', (newData) => {
            console.log(newData);
            // Actualiza los datos según la hora y temperatura recibidos
            const newDataArray = chartData.map((item) => {
                if (item.name === newData.hora) {
                    return { name: newData.hora, C: newData.temperatura };
                }
                return item;
            });

            // Actualiza el estado con los nuevos datos
            setChartData(newDataArray);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [chartData, newSocket]);

    return (
        <>
            <div className="flex mt-[22px] w-full gap-[30px]">
                <div className="basis-[100%] border bg-white shadow-md cursor-pointer rounded-[4px]">
                    <div className="bg-[#F8F9FC] flex items-center justify-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
                        <h2>Datos</h2>
                        <FaEllipsisV color="gray" className="cursor-poniter" />
                    </div>
                    <div>
                        <LineChart
                            width={1700}
                            height={500}
                            data={chartData}
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
        </>
    );
};

export default TemperatureChart;
