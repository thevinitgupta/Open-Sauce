import Banner from '../components/Banner'
import Header from '../components/Header'
import Cloth from "../public/cloth.png"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[#0b0b0b] min-h-screen">
      <div className="fixed w-[300px] h-[300px] blur-md -top-3 -left-5 invisible md:visible">
          <Image src={Cloth.src} height={400} width={400} className="z-0"/>
      </div>
      
      <Header />
      <Banner />
    </div>
  )
}
