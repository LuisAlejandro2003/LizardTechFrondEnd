import React from 'react';

const Sidebar2 = () => {

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('idUser');
  };

  return (


    <div className="fixed flex flex-col top-0 left-0 z-40 w-60 h-[screen] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-[100vh] px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

        <ul className="space-y-4 font-medium h-full">

          <div className="pt-2 pb-4" height="100%">
            <img src="public/images/logo.png" width="100%" alt="" />
          </div>
          <li className="pt-4">
            <a href="/home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#4FD1C5] dark:hover:bg-gray-700 group">
              <svg className="w-5 h-5 text-[#black] transition duration-75 dark:text-gray-400 group-hover:text-[#ffff] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />

              </svg>
              <span className="ms-3">Panel</span>
            </a>
          </li>

          <li className="pt-3">
            <a href="/history" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#4FD1C5] dark:hover:bg-gray-700 group">
              <svg className="flex-shrink-0 w-5 h-5 text-[#black] transition duration-75 dark:text-gray-400 group-hover:text-[#ffff] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />

              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Historial</span>
              {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </a>
          </li>
          <li className="pt-3 pb-32">
            <a href="/statistics" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#4FD1C5] dark:hover:bg-gray-700 group">
              <svg className="flex-shrink-0 w-5 h-5 text-[#black] transition duration-75 dark:text-gray-400 group-hover:text-[#fff] dark:group-hover:text-[#ffff]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">

                <path d="M9.333 0v4h4v4h4v4h-4v4h-4v-4h-4v-4h4v-4H0v-4h4V0h4z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Estadisticas</span>

            </a>
          </li>
          <div className='pt-32 pb-11'>

            <div id="dropdown-cta" className="p-4 mt-6 rounded-lg bg-[#4FD1C5] dark:bg-blue-900" role="alert">
              <div className="flex items-center mb-3">
                <span className="bg-[#fff] text-[#4FD1C5] text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-dismiss-target="#dropdown-cta" aria-label="Close">
                  <span className="sr-only">Close</span>
                  <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                </button>
              </div>
              <p className="mb-3 text- text-white dark:text-blue-400">
                Necesitas ayuda?
              </p>
              <a className="text-sm text-white underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300" href="#">Comunicate con nosotros</a>
            </div>

          </div>


          <li className="pt-32">
            <a href="/" className="flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-[#4FD1C5]  dark:hover:bg-gray-700 group ">
              <svg className="flex-shrink-0 w-5 h-5 text-[#black] transition duration-75 dark:text-gray-400 group-hover:text-[#FFFF] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap" onClick={handleLogout} >Salir</span>
            </a>
          </li>
        </ul>


      </div>
    </div>
  );
};

export default Sidebar2;
