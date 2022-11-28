import {useSession, signOut}  from "next-auth/react"
import Link from "next/link"
import { useEffect } from "react";

const Header = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        console.log(session)
    },[session])

    return (
    <nav className={`flex justify-center gap-10 p-5 text-white mx-auto z-10`}>
        <div className="max-w-7xl flex-1 flex justify-between gap-10">
            <div className="flex items-center flex-start text-3xl font-bold font-logo cursor-pointer">
                Owen Sauce
            </div>

            <div className="flex items-center cursor-pointer space-x-10 font-head font-bold text-[1.2rem]">
                <div>Search</div>
                <div>Github</div>
                {session ? 
                    <div className={`bg-[#8432ff] py-2 px-8 text-white rounded-full font-bold hover:bg-[#fd29ef] ${!session || status!=='authenticated' ? "loading" : "loaded"}`}>
                        Add Post
                    </div>
                    :
                    <div className={`${!session && status==='loading' ? "loading" : "loaded"}`}>Developer</div>
                }

                {
                session ? 
                        <div onClick={()=>{signOut()}} className={`${!session || status!=='authenticated' ? "loading" : "loaded"}`}>Sign Out</div>
                    :
                    <Link href="/auth">
                        <div className={`bg-[#8432ff] py-2 px-8 text-white rounded-full font-bold hover:bg-[#fd29ef] ${!session && status==='loading' ? "loading" : "loaded"}`}>Sign In</div>
                    </Link>
                }

            </div>

        </div>
        
    </nav>
    )
}

export default Header