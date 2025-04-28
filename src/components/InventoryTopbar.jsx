import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "../icons/icons.jsx";

const InvTopBar = () => {
    return (
        <div className="p-4 flex items-center w-full rounded-lg h-20">
            <img src="inventory" alt="Logo" className="mr-25" />

            <form className="search flex border border-gray-300 rounded-lg p-2 w-80">
                <button type="sumbit" className="mr-2">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="text" placeholder=" Search..." className="search-input" />
            </form>
            <FontAwesomeIcon icon={faUser} className="ml-auto" />
        </div >
    );
};

export default InvTopBar;
