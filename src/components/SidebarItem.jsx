import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ icon, menuItem, path }) => {
    return (
        <div className="">
            {path ? (
                <Link to={path} className="flex items-center p-2 gap-2 cursor-pointer rounded-lg w-64 my-3 hover:bg-SideBarColor">
                    {icon && <FontAwesomeIcon icon={icon} className="text-gray-600" />}
                    <span>{menuItem}</span>
                </Link>
            ) : (
                <div className="p-2 gap-2 cursor-pointer rounded-lg  w-64 my-3 hover:bg-SideBarColor">
                    {icon && <FontAwesomeIcon icon={icon} className="text-gray-600" />}
                    <span>{menuItem}</span>
                </div>
            )}
        </div>
    );
};

export default Item;