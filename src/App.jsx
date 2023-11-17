import Sidebar from './components/organism/Sidebar/Sidebar'
import Dashboard from './components/organism/DashboardView/Dashboard'
import { Outlet } from 'react-router-dom'


function App() {
  return (

    
    <div className='flex'>
      <div className='basis-[12%] h-[100vh]'>
        <Sidebar></Sidebar>
      </div>
      <div className='basis-[88%] border'>
        <Dashboard></Dashboard>
        <div>
         <Outlet></Outlet>

        </div>
      </div>
    </div>
  )
}

export default App
