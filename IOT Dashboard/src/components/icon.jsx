import { ReactSVG } from "react-svg"

/**
 * 
 * @param {{path: string, style: import("react").CSSProperties}} param0 
 * @returns 
 */
const Icon = ({ path, style }) => {
    return <ReactSVG src={path} style={style} />
}

export { Icon }