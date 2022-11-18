import Image from "next/image";
import { useState } from "react"
import Github from "../public/github.png"

const SignIn = () => {
    const [activeTab, setActiveTab] = useState("login");
    const toggleActiveTab = (e) => {
        if(e.target.innerHTML==="Sign Up") setActiveTab("signup");
        else setActiveTab("login");
    }
    return (
        <section className="w-[100%] h-[80%] flex items-center justify-center">
            <div className="w-[70%] sm:w-[35%] h-[80%] white-glassmorphism flex flex-col min-w-[320px] sm:min-w-[426px]">
                <div className="w-full h-16 font-head font-bold text-white text-3xl flex justify-evenly items-center text-shadow px-6 relative">
                <div className={`w-[35%] transition duration-1500 ease-in-out white-glassmorphism absolute bottom-0 ${activeTab==="login" ? "left-10" : "right-10"}`}></div>
                    <div className={`flex-1 flex items-center justify-center h-[100%] hover:cursor-pointer`} onClick={(e) => toggleActiveTab(e)}>Sign In</div>
                    <div className="h-[70%] mx-4 white-glassmorphism"></div>
                    <div className={`flex-1 flex items-center justify-center h-[100%] hover:cursor-pointer`} onClick={(e) => toggleActiveTab(e)}>Sign Up</div>
                </div>
                <div className="w-full flex-1 flex items-center">
                    {activeTab==="login" ? 
                    <div className="text-white w-full h-full flex flex-col items-center justify-evenly" id="login">
                        <p className="text-2xl text-center">
                            Welcome back, let's start contributing. <br/>
                            After you Sign In 👇
                        </p>
                        <div className="w-[60%] flex justify-center items-center gap-5 text-2xl object-contain bg-[#757EC7] p-4 rounded-full hover:cursor-pointer"> <Image src={Github.src} height={22} width={30}/> Sign In with Github</div>
                    </div>
                    :
                    <div className="text-white w-full h-full flex flex-col items-center justify-evenly" id="login">
                        <p className="text-2xl text-center">
                            Hello there, find your contributors <br/>
                            After you Sign Up 👇
                        </p>
                        <div className="w-[60%] flex justify-center items-center gap-5 text-2xl object-contain bg-[#757EC7] p-4 rounded-full hover:cursor-pointer"> <Image src={Github.src} height={22} width={30}/> Sign Up with Github</div>
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default SignIn
