import { FaTemperatureHigh } from "react-icons/fa";
import io from "socket.io-client";
import { useState, useEffect } from "react";

const Cards = () => {
    const [sensorData, setSensorData] = useState({
        temperatura: "",
        humedad: "",
        luxes: "",
        hora: "",
    });

    useEffect(() => {
        const newSocket = io('http://34.230.157.214:3000');

        newSocket.on("connect", () => {
            console.log('Conectado al servidor');
        });

        newSocket.on("nuevos-datos", (data) => {
            setSensorData(data);
            console.log('Datos recibidos:', data);
        });

        newSocket.on("disconnect", () => {
            console.log('Desconectado del servidor');
        });

        return () => {
            newSocket.disconnect();
        };
    }, []);


    return (
        <>
            {/* container card */}
            <div className="grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]">
                {/* card temperature*/}
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">
                            Temperatura
                        </h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                            {sensorData.temperatura} C°
                        </h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color="" />
                </div>
                {/* card humidity */}
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">
                            Humedad
                        </h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                            {sensorData.humedad} C°
                        </h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color="" />
                </div>
                {/* card luminosidad*/}
                <div className="h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#36B9CC] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
                    <div>
                        <h2 className="text-[#B5B9DF] text-[14px] leading-[17px] font-bold">
                            Luminosidad
                        </h2>
                        <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
                            {sensorData.luxes} C°
                        </h1>
                    </div>
                    <FaTemperatureHigh fontSize={28} color="" />
                </div>
            </div>
        </>
    );
};

export default Cards;
