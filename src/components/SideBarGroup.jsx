import Item from './SideBarItem';

const ItemGroup = ({ GroupName, items }) => {
    return <div className='sidebar-group'>
        <h2 className='group-title'>{GroupName}</h2>
        <div className='sidebar-item'>
            {items.map((item, index) => (
                <Item key={index} icon={item.icon} menuItem={item.menuItem} />
            ))}
        </div>
    </div>
}

export default ItemGroup;