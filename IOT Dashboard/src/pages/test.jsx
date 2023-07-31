import { useEffect, useState } from "react"
import { useSocket } from "../hooks/useSocket"

const TestPage = () => {
    const { initialize} = useSocket()
    const [payload, setPayload] = useState({ event: '', message: '' })

    useEffect(() => {
        initialize((err, socket) => {
            socket.on("house:chicken", (data) => {
                setPayload(data)
            })
        })
    }, [])

    return (
        <>
            <div className="p-3">
                {Object.keys(payload).map((key) => (
                    <div key={key}>
                        <span>{key}: <strong>{payload[key]}</strong></span>
                    </div>
                ))}
            </div>

        </>
    )
}

export { TestPage }