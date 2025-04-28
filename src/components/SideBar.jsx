import ItemGroup from './SideBarGroup';
import Item from './SideBarItem';
import { faHome, faComments, faClipboardCheck, faTableCellsLarge, faUser, faUserLock, faBug, faGear, faQuestionCircle } from '../icons/icons';

const SideBar = () => {
    const generalItems = [
        { icon: faHome, menuItem: ' Dashboard', path: '/' },
        { icon: faClipboardCheck, menuItem: ' Inventory', path: '/inventory' },
        { icon: faTableCellsLarge, menuItem: ' Forecast' },
        { icon: faComments, menuItem: ' ???' },
        { icon: faUser, menuItem: ' ???' }
    ];

    const group2Items = [
        { icon: faUserLock, menuItem: ' ???' },
        { icon: faBug, menuItem: ' ???' },
    ];


    const otherItems = [
        { icon: faGear, menuItem: ' Settings' },
        { icon: faQuestionCircle, menuItem: ' Help Center' },
    ];

    return (
        <div className='w-70 rounded-[2vw] shadow-2xl/30 p-3 flex flex-col h-screen sticky top-0 left-0 z-10 m-4 border-2 border-gray-300 '>
            {/* Welcome Messsage*/}
            <div className="mb-6">
                <Item icon={"CompanyIcon"} menuItem={"Welcome Back, Admin!"} />
            </div>

            {/* Rendering Groups */}
            <ItemGroup GroupName={"General"} items={generalItems} />
            <ItemGroup GroupName={"Group 2"} items={group2Items} />
            <ItemGroup GroupName={"Other"} items={otherItems} />
        </div>
    )
}
export default SideBar;