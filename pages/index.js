import Banner from '../components/Banner'
import Header from '../components/Header'
import Cloth from "../public/cloth.png"
import Image from 'next/image'
import { connectToDatabase } from '../util/mongodb'



export async function getServerSideProps(context) {
  try {
    await connectToDatabase()
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default function Home({isConnected}) {
  return (
    <div className="bg-[#0b0b0b] min-h-screen">
      <div className="fixed w-[300px] h-[300px] blur-md -top-3 -left-5 invisible md:visible">
          <Image src={Cloth.src} height={400} width={400} className="z-0"/>
      </div>
      
      <Header />
      <Banner isConnected={isConnected} />
    </div>
  )
}
