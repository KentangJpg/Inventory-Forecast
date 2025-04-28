import InvTopBar from "../components/InventoryTopBar";
import Card from "../components/Card";
import Table from '../components/Table';

const Inventory = () => {
    const columns = [
        { header: 'Item Name', accessor: 'name' },
        { header: 'Quantity', accessor: 'quantity' },
        { header: 'Price', accessor: 'price' },
        { header: 'Stock', accessor: 'stock' },
    ];

    const data = [
        { name: 'Apple', quantity: 50, price: '$1.00', stock: 'In Stock' },
        { name: 'Banana', quantity: 30, price: '$0.50', stock: 'In Stock' },
        { name: 'Orange', quantity: 20, price: '$0.80', stock: 'In Stock' },
        { name: 'Banana', quantity: 50, price: '$0.90', stock: 'In Stock' },
    ];
    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-full">
                <div className="p-2">
                    <InvTopBar />
                </div>

                <div className="flex-1 p-3 overflow-y-auto rounded-lg">
                    <span className="font-bold text-5xl block mb-5">Inventory</span>
                    <span className="text-thin text-xl block mb-5">Here's a list of your task this month!</span>

                    <div className="flex justify-between items-center w-130">
                        <Card width="w-50" height="h-2" className="mt-5" />
                        <Card width="w-30" height="h-2" className="mt-5" />
                        <Card width="w-30" height="h-2" className="mt-5" />
                    </div>

                    <div className="">
                        <Table columns={columns} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;