import Item from './SideBarItem';

const ItemGroup = ({ GroupName, items }) => {
    return <div className='sidebar-group mb-5'>
        <h2 className='group-title ms-2 text-black-500 '>{GroupName}</h2>
        <div className='sidebar-item'>
            {items.map((item, index) => (
                <Item key={index} icon={item.icon} menuItem={item.menuItem} path={item.path} />
            ))}
        </div>
    </div>
}

export default ItemGroup;