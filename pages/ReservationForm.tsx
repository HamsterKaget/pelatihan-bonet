export default function ReservationForm() {
    return (
        <>
            <div className="w-screen h-screen bg-black bg-opacity-50 relative">
                <div className="bg-white w-[65%] pt-12 pb-[150px] h-max px-[37px] absolute top-20 left-0 right-0 ml-auto mr-auto">
                    <h1 className="text-5xl">User Settings</h1>
                    <hr className="w-full my-6 border-gray-300 border-[1px]"/>
                    <form method="post">
                        <div className="grid grid-rows-3 gap-x-32 px-24 py-10 mr-auto ml-auto gap-14 grid-cols-2 w-full">
                            <div className="space-y-4">
                                <p className="text-[26px]">Full Name</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[400px] bg-white border-2 border-black"/>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">Room type</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[400px] bg-white border-2 border-black"/>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">Address</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[450px] bg-white border-2 border-black"/>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">Date</p>
                                <div className="grid grid-cols-2 gap-x-10">
                                    <input type="text" className="rounded-3xl p-1 py-3 bg-white border-2 border-black"/>
                                    <input type="text" className="rounded-3xl p-1 py-3 bg-white border-2 border-black"/>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">User ID</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[380px] bg-white border-2 border-black"/>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">Quantity</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[250px] bg-white border-2 border-black"/>
                            </div>
                        </div>
                        <div className="text-2xl text-white space-x-10 absolute bottom-20h right-20">
                            <button className="p-2 px-6 rounded-3xl tracking-[1px] bg-red-500">Cancel</button>
                            <button className="p-2 px-8 rounded-3xl tracking-[1px] bg-cyan-600">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}