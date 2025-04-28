import ItemGroup from './SideBarGroup';
import Item from './SideBarItem';

const SideBar = () => {
    const generalItems = [
        { icon: 'path/to/icon1', menuItem: 'Dashboard' },
        { icon: 'path/to/icon2', menuItem: 'Inventory' },
        { icon: 'path/to/icon3', menuItem: 'Forecast' },
        { icon: 'path/to/icon4', menuItem: '???' },
        { icon: 'path/to/icon5', menuItem: '???' }
    ];

    const group2Items = [
        { icon: 'path/to/icon6', menuItem: '???' },
        { icon: 'path/to/icon6', menuItem: '???' },
    ];


    const otherItems = [
        { icon: 'path/to/icon7', menuItem: 'Settings' },
        { icon: 'path/to/icon7', menuItem: 'Help Center' },
    ];

    return (
        <div className='w-75 rounded-[2vw] shadow-2xl/30 p-4 flex flex-col gap-4 h-screen sticky top-0 left-0 z-10 m-1'>
            {/* Welcome Messsage*/}
            <Item icon={"CompanyIcon"} menuItem={"Welcome Back, Admin!"} />

            {/* Rendering Groups */}
            <ItemGroup GroupName={"General"} items={generalItems} />
            <ItemGroup GroupName={"Group 2"} items={group2Items} />
            <ItemGroup GroupName={"Other"} items={otherItems} />
        </div>
    )
}
export default SideBar;