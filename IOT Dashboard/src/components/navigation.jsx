import { Link } from "react-router-dom"
import { PiFlowerTulipBold, PiHouseSimpleBold, PiLeafBold } from "react-icons/pi"

const NavigationBar = ({ tab }) => {
    const activeColor = "#1363DF"

    const FlowerHouseIcon = ({ isActive }) => (
        <>
            <button className={`${isActive ? "before:content-[''] before:absolute before:h-[4px] before:w-[30%] before:bg-[#1363df] before:rounded-full before:bottom-0 " : ""} relative  flex flex-col gap-1 items-center px-3 w-max justify-center p-1 rounded-md`}>
                <PiFlowerTulipBold size={30} />
                <span className={`${isActive ? `text-[${activeColor}]` : ""} font-bold`}>Flower</span>
            </button>
        </>
    )

    const ChickenHouseIcon = ({ isActive }) => (
        <>
            <button className={`${isActive ? "before:content-[''] before:absolute before:h-[4px] before:w-[30%] before:bg-[#1363df] before:rounded-full before:bottom-0" : ""} relative  flex flex-col gap-1 items-center px-3 justify-center w-max p-1 rounded-md`}>
                <PiHouseSimpleBold size={30} style={{ fill: { color: isActive ? `${activeColor}` : "" } }} />
                <span className={`${isActive ? `text-[${activeColor}]` : ""} font-bold`}>Chicken</span>
            </button>
        </>
    )

    const CompostHouseIcon = ({ isActive }) => (
        <button className={`${isActive ? "before:content-[''] before:absolute before:h-[4px] before:w-[30%] before:bg-[#1363df] before:rounded-full before:bottom-0" : ""} relative  flex flex-col gap-1 items-center px-3 justify-center w-max p-1 rounded-md`}>
            <PiLeafBold size={30} style={{ fill: { color: isActive ? `${activeColor}` : "" } }} />
            <span className={`${isActive ? `text-[${activeColor}]` : ""} font-bold`}>Compost</span>
        </button>
    )

    return (
        <>
            <nav className="fixed bottom-0 w-full bg-white">
                <ul className="flex items-center gap-1 justify-between p-2 px-5">
                    <li>
                        <Link to={"/house/flower"}>
                            <FlowerHouseIcon isActive={tab == "flower" ? true : false} />
                        </Link>
                    </li>
                    <li>
                        <Link to={"/house/compost"}>
                            <CompostHouseIcon isActive={tab == "compost" ? true : false}/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/house/chicken"}>
                            <ChickenHouseIcon isActive={tab == "chicken" ? true : false} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export { NavigationBar }