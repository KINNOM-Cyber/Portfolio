import { useEffect, useState } from "react"
import { NavigationBar } from "../components/navigation"
import { DateTime } from "luxon"
import { PiFlowerTulipBold, PiHouseSimpleBold } from "react-icons/pi"
import { Link } from "react-router-dom"


const RootPage = (props) => {
    const [houseStatus] = useState([
        {
            id: 1,
            node: "โรงเรือนไม้ดอก",
            status: "ok",
            childnode: [
                {
                    label: "F01",
                    status: "ok"
                },
                {
                    label: "F02",
                    status: "ok"
                },
                {
                    label: "F03",
                    status: "ok"
                },
                {
                    label: "F03",
                    status: "ok"
                },
                {
                    label: "F05",
                    status: "ok"
                },
                {
                    label: "F06",
                    status: "ok"
                },
                {
                    label: "F07",
                    status: "ok"
                },
            ],
        },
        {
            id: 2,
            status: "ok",
            node: "โรงเรือนเลี้ยงไก่-01",
            childnode: [],
        },
    ])

    useEffect(() => {
        console.log(props)
    }, [])

    const date = DateTime.now().setLocale("th-TH")

    return (
        <>
            {/* <div id="nav-bar" className="font-IBM_Plex_Sans_Thai">
                <NavigationBar tab={""} />
            </div> */}
            <div id="body" className="font-IBM_Plex_Sans_Thai">
                {/* <div className="grid h-max">
                    <h1 className="text-gray-500">{date.toFormat("DDDD")}</h1>
                </div> */}
                {/* <div>
                    <h1>สถานะโรงเรือน</h1>
                    <div className="grid h-max gap-4 mt-4">
                        <ul className="grid h-max gap-4">
                            {houseStatus.map((state) => (
                                <li>
                                    <div key={state.id} className="grid h-max">
                                        <h2 data-status={state.status} className="relative before:h-4 before:w-1 before:rounded-full before:data-[status='ok']:bg-green-400 before:data-[status='ok']:shadow-green-400 before:data-[status='ok']:shadow-md before:content-[''] before:relative w-max flex items-center gap-2">{state.node}</h2>
                                        <div className="flex items-center gap-2">
                                            <p className="text-gray-400">สถานะ:</p>
                                            <strong>{state.text}</strong>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div> */}
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid content-center justify-center text-center">
                    <h1>เลือกโรงเรือน</h1>
                    <ul className="mt-4 flex gap-4 max-sm:flex-col">
                        <li>
                            <Link to="/house/flower">
                                <button className="relative flex flex-col items-center gap-3 justify-center max-sm:w-[90vw] w-32 h-32 p-4 rounded-md bg-gray-100 before:content-[''] before:absolute before:w-[50%] before:h-1 before:bg-[#1363df] before:rounded-full before:top-0 active:scale-[.95] transition-transform duration-[.3s] ease-out">
                                    <PiHouseSimpleBold size={40} />
                                    <strong>ไม้ดอก</strong>
                                </button>
                            </Link>
                        </li>
                        <li >
                            <Link to="/house/chicken">
                                <button className="relative flex flex-col items-center gap-3 justify-center max-sm:w-[90vw] w-32 h-32 p-4 rounded-md bg-gray-100 before:content-[''] before:absolute before:w-[50%] before:h-1 before:bg-[#1363df] before:rounded-full before:top-0 active:scale-[.95] transition-transform duration-[.3s] ease-out">
                                    <PiHouseSimpleBold size={40} />
                                    <strong>เลี้ยงไก่</strong>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export { RootPage }