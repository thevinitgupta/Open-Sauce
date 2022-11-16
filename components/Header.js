
const Header = () => {
    return (
    <div className={`flex justify-center gap-10 p-5 text-white mx-auto z-10`}>
        <div className="max-w-7xl flex-1 flex justify-between gap-10">
            <div className="flex items-center flex-start text-3xl font-bold font-logo cursor-pointer">
                Open Sauce
            </div>

            <div className="flex items-center cursor-pointer space-x-10 font-head font-bold text-[1.2rem]">
                <div>Search</div>
                <div>Github</div>
                <div>Developer</div>
                <div className="bg-[#8432ff] py-2 px-8 text-white rounded-full font-bold ">Sign In</div>
            </div>

        </div>
        
    </div>
    )
}

export default Header