import Dashboard from '../organism/DashboardView/Dashboard';
import Sidebar from '../organism/Sidebar/Sidebar';
import Body from '../organism/DashboardView/Body';
import Sidebar2 from '../organism/Sidebar/Sidebar2';

const Home = () => {
    return (
        <>
            <div className='flex'>
                <div className='basis-[12%] h-[100vh]'>
                    <Sidebar2></Sidebar2>
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