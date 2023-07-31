import { useEffect, useState } from "react"
import { useSocket } from "../hooks/useSocket"
import { useChickenHouse } from "../hooks/useChickenHouse"
import { useFlowerHouse } from "../hooks/useFlowerHouse"

const ConfigurationPage = () => {
    const [status, setStatus] = useState("offline")
    const { getSocket } = useSocket()
    const ch = useChickenHouse()
    const fh = useFlowerHouse()

    useEffect(() => {
        // const socket = getSocket()
        // if (socket.connected) {
        //     setStatus("online")
        // }

    }, [])

    return (
        <>
            <nav className="w-full flex items-center p-4 bg-[#1363DF]">
                <div>
                    <h1 className="uppercase text-white">configuration</h1>
                    <p className="uppercase text-xs text-gray-100 font-medium">Smart farming</p>
                </div>
            </nav>
            <div className="p-3">
                {
                    status == "offline" ? (
                        <div className="grid">
                            <span className="leading-relax">Socket Status: <strong className="text-red-500">{status}</strong></span>
                            <span className="text-xs opacity-40">If socket status is offline that mean this website has unable to configuration.</span>
                        </div>
                    ) : (
                        <div className="grid gap-3">
                            
                        </div>
                    )
                }
            </div>
        </>
    )
}

export { ConfigurationPage }