import React, { useState, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const initialData = [
    { name: '00:00' },
    { name: '02:00' },
    { name: '04:00' },
    { name: '06:00' },
    { name: '08:00' },
    { name: '10:00' },
    { name: '12:00' },
    { name: '14:00' },
    { name: '16:00' },
    { name: '18:00' },
    { name: '20:00' },
    { name: '22:00' },
];

const HumedadChart = () => {
    const [chartData, setChartData] = useState(initialData);
    const [temperatureState, setTemperature] = useState(false);



    useEffect(() => {
        // Obtener el token del localStorage
        const token = localStorage.getItem('token');

        // Verificar si hay un token antes de realizar la solicitud
        if (token) {
            fetch('http://localhost:8080/api/data/grafic', {
                headers: {
                    'x-token': token,
                },
            })
                .then(response => response.json())
                .then(data => {
                    // Mapear los datos recibidos y actualizar el estado
                    const newDataArray = initialData.map(item => {
                        const matchingData = data.datas.find(d => d.hora === item.name);
                        return matchingData ? { name: item.name, Humedad: matchingData.humedad } : item;
                    });

                    // Actualizar el estado con los nuevos datos
                    setChartData(newDataArray);
                })
                .catch(error => console.error('Error al obtener datos:', error));
        } else {
            console.error('No se encontró el token en el localStorage');
        }
    }, []);


    return (
        <>
            <div className="flex mt-[22px] w-full gap-[30px]">
                <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
                    <div className="bg-[#ffff] flex items-center justify-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#F8F9FC] mb-[20px] ">
                        <h2>Datos</h2>
                        <FaEllipsisV color="gray" className="cursor-poniter"></FaEllipsisV>
                    </div>
                    <div>
                        <AreaChart
                            width={1622}
                            height={600}
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                            style={{ backgroundColor: '#FFFF' }}
                        >
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis
                                domain={[50, 75]}
                                ticks={[50, 55, 60, 65,70, 75]}
                            />
                            <Tooltip />
                            <Legend />
                            <Area
                                type="monotone"
                                dataKey="Humedad"
                                stroke="#4FD1C5"
                                fill="url(#colorUv)"
                                activeDot={{ r: 8 }}
                            />
                        </AreaChart>
                    </div>

                    {temperatureState && <Temperature></Temperature>}
                </div>
            </div>
        </>
    );
};

export default HumedadChart;


<YAxis domain={[55, 75]} ticks={[55, 60, 65, 70, 75]} />