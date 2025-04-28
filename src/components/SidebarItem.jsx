// src/components/Item.jsx
const Item = ({ icon, menuItem }) => {
    return (
        <div className="flex items-center p-2 cursor-pointer hover:bg-gray-700 rounded-lg bg-SideBarColor">
            <img src={icon} alt="icon" className="w-6 h-6 mr-4" />
            <span className="font-bold text-white">{menuItem}</span>
        </div>
    );
};

export default Item;
