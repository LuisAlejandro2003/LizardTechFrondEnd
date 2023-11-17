import { Link } from "react-router-dom";

const Sidebar2 = () => {
    return (
        <>
 <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div className="min-h-screen flex flex-row bg-gray-100">
  <div className="flex flex-col w-56 bg-[#f3f4f6] rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center  h-20">
    <img src="public/images/image.png" alt="Descripción de la imagen"  />
    </div>
    <ul className="flex flex-col flex-grow py-4">
      <li>
        <a href="/home" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
          <span className="text-[16px] font-bold">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="/history" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-history"></i></span>
          <span className="text-[16px]  font-bold">Historial</span>
        </a>
      </li>
      <li>
        <a href="/statistics" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-calculator"></i></span>
          <span className="text-[16px] font-bold">Estadisticas</span>
        </a>
      </li>
  
      <li className="mt-auto">
        <a href="/login" className="flex flex-row  items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
          <span className="text-[16px]  font-bold">Salir</span>
        </a>
      </li>
    </ul>
  </div>
</div>


        </>

           
    );
}

export default Sidebar2;