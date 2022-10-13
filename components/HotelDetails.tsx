import Hotel from '../public/Hotel.png'
import Image from 'next/image'

export default function HotelDetails() {
    return (
        <div className="w-screen h-screen font-Poppins relative flex bg-black bg-opacity-50">
            <div className="bg-white absolute flex flex-col right-0 left-0 top-24 mr-auto ml-auto w-[1400px] h-[80%]">
                <div className='flex w-full h-[65%] '>
                    <div className='w-[55%] bg-cyan-300 relative'>
                        <Image src={Hotel} alt="" layout='fill'/>
                    </div>
                    <div className='w-[45%] h-[70%] text-center pt-[70px]'>
                        <h1 className='font-semibold text-[64px] tracking-[2px]'>Single</h1>
                        <p className='text-dongker font-thin text-[32px] tracking-[2px]'>$100/night</p>
                    </div>
                </div>
                <div className='flex h-[35%]'>
                    <p className='text-[29px] text-gray-500 font-medium w-[55%] pt-14 px-20 tracking-[3px]'>
                    Suitable for single person who <br /> slept alone and like quiet place to <br /> live in.
                    </p>
                    <button className='py-[12px] px-[10px] tracking-[1px] mt-auto mb-[95px] ml-auto mr-[140px] h-max text-2xl rounded-3xl text-white bg-ijo hover:bg-cyan-800 ease-linear duration-200'>
                        Book now!
                    </button>
                </div>
            </div>
        </div>
    )
}