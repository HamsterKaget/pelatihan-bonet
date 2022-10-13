import Pizza from '../public/Pizza.png'
import Image from 'next/image'

export default function FoodDetails() {
    return (
        <div className="w-screen h-screen font-Poppins relative flex bg-black bg-opacity-50">
            <div className="bg-white absolute flex flex-col right-0 left-0 top-24 mr-auto ml-auto w-[1400px] h-[80%]">
                <div className='flex w-full h-[65%] '>
                    <div className='w-[55%] relative'>
                        <Image src={Pizza} alt="" layout='fill'/>
                    </div>
                    <div className='w-[45%] h-[70%] text-center pt-[70px]'>
                        <h1 className='font-semibold text-[64px] tracking-[2px] text-right mr-24'>Satay</h1>
                        <p className='text-dongker font-thin text-[30px] tracking-[2px] text-right mt-1 mr-24'>$4.99</p>
                    </div>
                </div>
                <div className='flex h-[35%]'>
                    <p className='text-[29px] text-gray-500 font-medium w-[55%] pt-14 px-20 tracking-[3px]'>
                    A simple recipe for extra cheese pizza on top of the best homemade pizza dough.                    </p>
                    <button className='py-[12px] px-[10px] tracking-[1px] mt-auto mb-[95px] ml-auto mr-[140px] h-max text-2xl rounded-3xl text-white bg-ijo hover:bg-cyan-800 ease-linear duration-200'>
                        Order now!
                    </button>
                </div>
            </div>
        </div>
    )
}