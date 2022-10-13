import Image from "next/image"
import Banner from "../public/NourishmentBanner.png"
import OurMenu from "../public/OurMenu.png"
import Pizza from "../public/Pizza.png"
import Star from "../public/Star.png"


export default function Nourishment() {
    return (
        <div className="font-Poppins">
            <div className="w-screen font-Poppins h-max pb-14 bg-abu-abu px-10 pt-10">
                <div className="relative h-[764px] w-[1805] drop-shadow-sm">
                    <Image src={Banner} layout="fill" alt=""/>
                    <div className="h-[99%] w-full absolute bg-gradient-to-r z-40 from-ijo to-transparent"></div>
                    <h1 className="font-bold text-6xl absolute w-full text-center top-[45%] align-middle text-white z-50">feast and cheerish it!</h1>
                </div>
                <div className="text-center mt-[76px]">
                    <Image src={OurMenu} alt="" width="631px" height="220px"/>
                    <h1 className="font-bold mt-[41px] text-5xl">Our Awesome Food</h1>
                </div>
                <section className="grid grid-cols-1 lg:grid-cols-3 mt-[76px] gap-y-[57px] gap-x-[22px]">
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                    <button>
                        <div className="bg-white hover:scale-[1.03] ease-linear duration-200 h-[434px]">
                            <div className=" flex">
                                <div className="w-[325px] h-[250px] relative rounded-3xl">
                                    <Image src={Pizza} layout="fill" alt="" />
                                </div>
                                <div className="text-right w-2/5 h-max pt-8 pr-3">
                                    <h3 className="font-bold text-[48px]">Pizza</h3>
                                    <p className="text-[24px] font-light text-dongker">$4.99</p>
                                    <div className="grid grid-cols-5 ml-14 mt-10 w-[160px] h-[28px]">
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                        <Image src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="mt-[14px] mx-[19px] text-[22px] text-left font-light text-gray-600 tracking-[1px]">A simple recipe for extra cheese pizza on top of the best homemade pizza dough</p>
                        </div>
                    </button>
                  
                </section>
            </div>
        </div>
    )
}