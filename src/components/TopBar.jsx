const TopBar = () => {
    return (
        <div className="p-4 flex items-center w-full rounded-lg h-20">
            <img src="dashboard" alt="Logo" className="mr-10" />

            <ul className="flex space-x-6 font-semibold text-lg">
                <li>Overview</li>
                <li>Customer</li>
                <li>Product</li>
                <li>Settings</li>
            </ul>

            <form className="search flex ml-auto border border-gray-300 rounded-lg p-2">
                <button type="sumbit" className="mr-2">S</button>
                <input type="text" placeholder="Search..." className="search-input" />
            </form>
            <img src="profile" alt="." className="ml-5" />
        </div >
    );
};

export default TopBar;
