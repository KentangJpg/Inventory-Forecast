// src/components/Item.jsx
const Item = ({ icon, menuItem }) => {
    return (
        <div className="flex items-center p-2 cursor-pointer rounded-lg bg-SideBarColor w-64 my-3 hover:bg-SideBarColorHover">
            <img src={icon} alt="icon" className="w-6 h-6 mr-4" />
            <span className="">{menuItem}</span>
        </div>
    );
};

export default Item;
