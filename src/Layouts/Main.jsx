import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="bg-[#ebedff]">
            <Outlet />
        </div>
    );
};

export default Main;