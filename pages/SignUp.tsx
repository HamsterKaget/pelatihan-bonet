import Image from "next/image";
import HeroImg from "../public/bg.png"

export default function SignUp() {
    return(
        <>
            <div className="h-screen w-screen relative font-Poppins">
                <Image src={HeroImg} alt='' layout="fill"/>
                <div className="bg-black absolute blur-md opacity-40 w-screen h-screen"></div>
                
                
                <div className="absolute top-[38%] left-[10%] mr-auto ml-auto text-[45px] text-white">
                    <h1 className="tracking-[.35em] font-normal text-7xl text-center">DAVENPORT</h1>
                    <div className="text-center mt-10 tracking-[.10em] leading-tight">
                        <p>your dream</p>
                        <p>into</p>
                        <p>your reality</p>
                    </div>
                </div>

                <div className="bg-white pt-[25px] pb-[61px] flex place-content-center h-max w-[35%] absolute rounded-xl right-20 top-[5%]">
                    <div className="w-[75%]">
                        <h2 className="text-center text-[40px] font-semibold">Sign Up</h2>
                        <p className="text-center text-[22px] mt-[24px] text-gray-400">Join thousands of other happy families and get all of our benefit just for you</p>

                        <form action="POST">
                            <div className="space-y-3 mt-[38px]">
                                <h5 className="text-dongker">Username</h5>
                                <input type="hidden" name="role" value="user" className="bg-abu-abu w-full p-2 rounded-md"/>
                                <input type="text" className="bg-abu-abu w-full p-2 rounded-md"/>
                            </div>
                            <div className="space-y-3 mt-[17px]">
                                <h5 className="text-dongker">Email Address</h5>
                                <input type="email" className="bg-abu-abu w-full p-2 rounded-md"/>
                            </div>
                            <div className="space-y-3 mt-[17px]">
                                <h5 className="text-dongker">Phone Number</h5>
                                <input type="text" className="bg-abu-abu w-full p-2 rounded-md"/>
                            </div>
                            <div className="space-y-3 mt-[17px]">
                                <h5 className="text-dongker">Password</h5>
                                <input type="password" className="bg-abu-abu w-full p-2 rounded-md"/>
                            </div>
                            <div className="space-y-3 mt-[17px]">
                                <h5 className="text-dongker">Confirm Password</h5>
                                <input type="password" className="bg-abu-abu w-full p-2 rounded-md"/>
                            </div>
                            <button className="bg-ijo hover:opacity-80 ease-linear duration-200 text-white p-3 w-full mt-[55px] rounded-md">
                                Sign in
                            </button>
                            <button className="bg-abu-abu hover:bg-gray-300 hover:text-black ease-linear duration-200 text-gray-400 p-3 w-full mt-[16px] rounded-md">
                                Back to Home
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}