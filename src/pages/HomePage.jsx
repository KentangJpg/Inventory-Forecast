
import TopBar from "../components/TopBar";
import Menu from "../components/Menu";
import Card from "../components/Card";

const HomePage = () => {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-full ms-3">
                <div className="p-2">
                    <TopBar />
                </div>

                <div className="flex-1 p-3 overflow-y-auto">
                    <span className="font-bold text-5xl block ms-">Dashboard</span>
                    <div className="ms- mt-6">
                        <Menu />
                    </div>
                    <div className="grid grid-cols-4 gap-7 mt-7">
                        <Card width="w-65" height="h-40" className="mt-5" />
                        <Card width="w-65" height="h-40" className="mt-5" />
                        <Card width="w-65" height="h-40" className="mt-5" />
                        <Card width="w-65" height="h-40" className="mt-5" />
                    </div>
                    <div className="grid grid-cols-2 gap-50 mt-10">
                        <Card width="w-160" height="h-108" className="mt-5" />
                        <Card width="w-118" height="h-108" className="mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
