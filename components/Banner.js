import Image from "next/image"
import Sphere from "../public/sphere.png"

const Banner = ({isConnected}) => {
    return (
        <div className="max-w-7xl h-[85vh] flex-1 flex items-center justify-center p5 relative overflow-x-hidden">
            <div className="w-[85%] h-[85%] mx-auto text-white flex justify-center flex-col  z-10 ">
                <div className="font-hero text-8xl font-bold ">Redefining Collaboration</div>
                <div className="w-[50%] text-2xl font-head mt-7">Experience a new way of finding projects to contribute to based on your level<br/><span className="text-2xl">{isConnected && "Connected to database"}</span></div>

                <div className="mt-5 bg-[#8432ff] w-[200px] text-[1.2rem] px-5 py-4 rounded-full flex justify-between items-center cursor-pointer">
                    Search Projects <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

                </div>
            </div>
            <div className="absolute w-[240px] h-[240px] md:w-[340px] md:h-[340px] right-[1%] object-cover">
            <Image src={Sphere.src} height={340} width={340} className="animate-spin-slow z-0"/>
            </div>
        </div>
    )
}

export default Banner