import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "../icons/icons.jsx";

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
                <button type="sumbit" className="mr-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="text" placeholder=" Search..." className="search-input" />
            </form>
            <FontAwesomeIcon icon={faBell} className="ml-5" />
            <FontAwesomeIcon icon={faUser} className="ml-5" />
        </div >
    );
};

export default TopBar;
