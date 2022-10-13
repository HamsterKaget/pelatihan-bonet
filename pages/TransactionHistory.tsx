export default function TransactionHistory() {
    return (
        <>
            <div className="w-screen h-screen  tracking-[.5px] bg-abu-abu font-Poppins relative">
                <h1 className="text-center text-2xl absolute top-8 w-screen tracking-[.15em]">DAVENPORT</h1>
                <div className=" w-3/4 absolute top-[20%] left-0 right-0 ml-auto mr-auto">
                    <h1 className="text-5xl">Transaction history</h1>
                    <hr className="w-[40%] my-6 border-gray-300 border-[1px]"/>
                    <div className="bg-white drop-shadow-sm h-max rounded-xl">
                        <table className="table-auto w-full">
                            <thead className="py-10 rounded-md">
                                <tr className="table-row">
                                    <th>No</th>
                                    <th>User id</th>
                                    <th>Payment method</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-row text-slate-600">
                                    <th>1</th>
                                    <th>#23asd92</th>
                                    <th>Cash</th>
                                    <th>Food</th>
                                    <th>12/12/22</th>
                                    <th><div className="bg-green-500 w-1/2 mr-auto ml-auto p-1 px-8 text-sm font-medium rounded-xl text-white">Paid</div></th>
                                    <th>
                                        <div className="grid text-white font-medium grid-cols-2 w-3/4 mr-auto ml-auto space-x-5">
                                            <button className="p-1 rounded-xl bg-red-500">cancel</button>
                                            <button className="p-1 rounded-xl bg-cyan-500">Pay</button>
                                        </div>
                                    </th>
                                </tr>
                                <tr className="table-row text-slate-600">
                                    <th>1</th>
                                    <th>#23asd92</th>
                                    <th></th>
                                    <th>Room</th>
                                    <th></th>
                                    <th><div className="bg-yellow-500 w-1/2 mr-auto ml-auto p-1 px-8 text-sm font-medium rounded-xl text-white">Unpaid</div></th>
                                    <th>
                                        <div className="grid text-white font-medium grid-cols-2 w-3/4 mr-auto ml-auto space-x-5">
                                            <button className="p-1 rounded-xl bg-red-500">cancel</button>
                                            <button className="p-1 rounded-xl bg-cyan-500">Pay</button>
                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                </div>
        </>
    )
}