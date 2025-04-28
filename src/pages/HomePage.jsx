import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";

const HomePage = () => {
    return (
        <div className="flex h-screen">
            <div className="w-[18rem]">
                <SideBar />
            </div>

            <div className="flex flex-col w-full ms-3">
                <div className="p-2">
                    <TopBar />
                </div>

                <div className="flex-1 p-3 overflow-y-auto rounded-lg shadow-2xl/30 ms-5">
                    <span className="font-bold text-5xl block mb-5">Dashboard</span>
                    <Menu className="mt-5" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
