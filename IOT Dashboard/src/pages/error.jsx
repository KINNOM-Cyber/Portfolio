import { useState } from "react"

const ErrorPage = () => {
    const [title, setTitle] = useState("Page Not Found")
    const [statusCode, setStatusCode] = useState(404)

    return (
        <>
            <div className="absolute grid h-max gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center content-center text-center">
                <h1 className="text-3xl">{statusCode}</h1>
                <span>{title}</span>
            </div>
        </>
    )
}

export { ErrorPage }