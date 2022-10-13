export default function UserSettings() {
    return (
        <>
            <div className="w-screen h-screen bg-black bg-opacity-50 relative">
                <div className="bg-white w-[65%] pt-12 pb-[200px] h-max px-[37px] absolute top-32 left-0 right-0 ml-auto mr-auto">
                    <h1 className="text-5xl">User Settings</h1>
                    <hr className="w-full my-6 border-gray-300 border-[1px]"/>
                    <form method="post">
                        <div className="grid grid-rows-2 gap-x-32 px-24 py-10 mr-auto ml-autoht gap-20 grid-cols-2 w-max">
                            <div className="space-y-4">
                                <p className="text-[26px]">Username</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[424px] bg-white border-2 border-black"/>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">Username</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[424px] bg-white border-2 border-black"/>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">Phone number</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[424px] bg-white border-2 border-black"/>
                            </div>
                            <div className="space-y-4">
                                <p className="text-[26px]">Password</p>
                                <input type="text" className="rounded-3xl p-1 py-3 w-[381px] bg-white border-2 border-black"/>
                            </div>
                        </div>
                        <div className="text-2xl text-white space-x-10 absolute bottom-20 right-20">
                            <button className="p-2 px-6 rounded-3xl tracking-[1px] bg-red-500">Cancel</button>
                            <button className="p-2 px-8 rounded-3xl tracking-[1px] bg-cyan-600">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}