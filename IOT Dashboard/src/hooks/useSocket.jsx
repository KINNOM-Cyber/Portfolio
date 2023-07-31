import { Socket, io } from "socket.io-client"

const endpoint = "ws://192.168.1.33:4120"

/**
 * 
 * @private
 * @param {(err: string, socket: Socket) => {}} callback 
 */
const initialize = (callback) => {
    const socket = io(endpoint, { path: "/ws" })

    if (!socket) {
        return callback("Can not connect to websocket", null)
    }

    callback(null, socket)
}

const getSocket = () => {
    return io(endpoint, { path: "/ws" })
}

const useSocket = () => {
    return {
        initialize,
        getSocket
    }
}

export { useSocket }