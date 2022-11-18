import Banner from '../components/Banner'
import Header from '../components/Header'
import Cloth from "../public/cloth.png"
import Image from 'next/image'
import SignIn from '../components/SignIn'

export default function Home() {
  return (
    <div className="bg-[#0b0b0b] h-screen w-screen">
        <div className="fixed w-[300px] h-[300px] top-16 left-[60%] ">
            <Image src={Cloth.src} height={400} width={400} className="z-0"/>
        </div>
        
        <Header />
        <SignIn/>
    </div>
  )
}
