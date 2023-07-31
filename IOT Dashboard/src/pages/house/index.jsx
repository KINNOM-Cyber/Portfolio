import { useEffect, useState } from "react"
import { NavigationBar } from "../../components/navigation"
import { DateTime } from "luxon"
import { Outlet, useLocation } from "react-router-dom"

const Index = () => {
    return (
        <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 grid text-center justify-center justify-items-center ">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={84}
                height={84}
                style={{
                    enableBackground: "new 0 0 512 512",
                }}
                viewBox="0 0 24 24"
            >
                <path
                    className="opacity-10"
                    fillRule="evenodd"
                    d="M10.024 2.746a3.5 3.5 0 0 1 3.952 0l6.5 4.448A3.5 3.5 0 0 1 22 10.082V18.5a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 18.5v-8.418a3.5 3.5 0 0 1 1.524-2.888zM9.5 17.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
                    clipRule="evenodd"
                    data-original="#000000"
                />
            </svg>
            <p className="text-gray-500 w-56 text-sm">Please select the button below to go to the desired house.</p>
        </div>
    )
}

const RootHousePage = () => {
    const date = DateTime.now()
    const location = useLocation()
    const [time, setTime] = useState(date.toFormat("TT"))
    const [tab, setTab] = useState("")

    useEffect(() => {
        setInterval(() => {
            const currentTime = DateTime.now().toFormat("TT")
            setTime(currentTime)
        }, 1000);
    }, [])

    useEffect(() => {
        const path = location.pathname.split("/")
        setTab(path[2])
    }, [location])

    return (
        <>
            <nav className="w-full flex items-center p-4 bg-[#1363DF]">
                <div>
                    <h1 className="uppercase text-white">Smart Farming</h1>
                    <p className="uppercase text-xs text-gray-100 font-medium">faculty of agriculture</p>
                </div>
            </nav>
            <div className="p-2">
                <span>Date: <strong>{date.toFormat("EEEE, d MMM yyyy ")}</strong> Time: <strong>{time}</strong></span>
            </div>
            <Outlet />
            <NavigationBar tab={tab} />
        </>
    )
}

export { RootHousePage, Index }