import Dashboard from '../organism/DashboardView/Dashboard';
import Sidebar from '../organism/Sidebar/Sidebar';
import Body from '../organism/DashboardView/Body';


const Home = () => {
    return (
        <>
            <div className='flex'>
                <div className='basis-[12%] h-[100vh]'>
                    <Sidebar></Sidebar>
                </div>
                <div className='basis-[88%] border'>
                    <Dashboard></Dashboard>
                    <div>
                        <Body></Body>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;