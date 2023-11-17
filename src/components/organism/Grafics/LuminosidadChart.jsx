import React, { useState, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

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

const LuminosidadChart = () => {
  const [chartData, setChartData] = useState(initialData);

  useEffect(() => {
    // Realizar la solicitud HTTP GET
    fetch('http://localhost:8080/api/data/grafic')
      .then((response) => response.json())
      .then((data) => {
        // Mapear los datos recibidos y actualizar el estado
        const newDataArray = initialData.map((item) => {
          const matchingData = data.datas.find((d) => d.hora === item.name);
          return matchingData
            ? { name: item.name, Luminosidad: matchingData.luxes }
            : item;
        });

        // Actualizar el estado con los nuevos datos
        setChartData(newDataArray);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []); // El segundo parámetro [] significa que este efecto se ejecutará solo una vez al montar el componente

  return (
    <>
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2>Datos</h2>
            <FaEllipsisV color="gray" className="cursor-poniter"></FaEllipsisV>
          </div>
          <div>
            <LineChart
              width={1600}
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
              <YAxis
                domain={[0, 500]}
                ticks={[0, 100, 200, 300, 400, 500]}
              />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Luminosidad"
                stroke="#36B9CC"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuminosidadChart;
