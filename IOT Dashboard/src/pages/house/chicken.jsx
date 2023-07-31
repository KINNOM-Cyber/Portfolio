import { PiEggBold, PiHouseSimpleBold, PiFanBold } from "react-icons/pi"
import { FaBolt } from "react-icons/fa"
import { RiBox2Fill } from "react-icons/ri"
import { MdOutlineWaterDrop } from "react-icons/md"
import { useChickenHouse } from "../../hooks/useChickenHouse"
import { useEffect } from "react"

const ChickenHousePage = () => {
    const {
        egg,
        setEgg,
        outside,
        setOutside,
        houseNode,
        setHouseNode
    } = useChickenHouse()

    const random = (min, max) => (Math.random() * (max - min) + min)

    const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
        let timeout;

        const runInterval = () => {
            const timeoutFunction = () => {
                intervalFunction();
                runInterval();
            };

            const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

            timeout = setTimeout(timeoutFunction, delay);
        };

        runInterval();

        return {
            clear() { clearTimeout(timeout) },
        };
    }

    const formatNumberWithTwoDecimalPlaces = (number) => {
        const format = Intl.NumberFormat("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }).format(number).toString()
        return parseFloat(format).toFixed(2)
    }

    // useEffect(() => {
    //     console.log(formatNumberWithTwoDecimalPlaces(10.5))
    // }, [])

    useEffect(() => {
        setRandomInterval(function () {
            setEgg((prevEgg) => ({
                ...prevEgg,
                daily: prevEgg.daily + 1,
                total: prevEgg.total + 1
            }))
        }, 1000, 3000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            setOutside((prevOutside) => ({
                ...prevOutside,
                temp: {
                    ...prevOutside.temp,
                    value: formatNumberWithTwoDecimalPlaces(Number(random(34.5, 36))),
                },
                humidity: {
                    ...prevOutside.humidity,
                    value: formatNumberWithTwoDecimalPlaces(Number(random(40, 41.5)))
                }
            }))
        }, 1000)
    }, [])

    useEffect(() => {
        setInterval(() => {
            setHouseNode((prevHouseNode) => ({
                ...prevHouseNode,
                temp: {
                    ...prevHouseNode.temp,
                    value: formatNumberWithTwoDecimalPlaces(random(26, 27))
                },
                ammonia: {
                    ...prevHouseNode.ammonia,
                    value: formatNumberWithTwoDecimalPlaces(random(0.1, 0.2))
                }
            }))
        }, 1000)
    }, [])

    const updateHouseNode = () => {
        setHouseNode((prevHouseNode) => ({
            ...prevHouseNode,
            humidity: {
                ...prevHouseNode.humidity,
                value: formatNumberWithTwoDecimalPlaces(
                    parseFloat(
                        ((outside.temp.value - prevHouseNode.temp.value) * 4.5) + Number(outside.humidity.value)
                    )
                )
            }
        }));
    }

    useEffect(() => updateHouseNode, [outside.humidity.value, outside.temp.value, houseNode.temp.value])

    return (
        <>
            <div className="p-3 grid grid-cols-3 gap-2 mb-24">
                <div className="flex gap-2 col-span-3">
                    <div className="grid border p-3 w-[250px]">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                            <PiEggBold size={25} />
                            <strong>Egg</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Daily</strong> <strong className="text-[#1363DF]">{egg.daily}</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Total</strong> <strong className="text-[#1363DF]">{egg.total}</strong></span>
                        </div>
                    </div>
                    <div className="grid border p-3 w-full col-span-2">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                            <strong>Outside</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Temp</strong> <strong className="text-[#1363DF]">{outside.temp.value} {outside.temp.unit}</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Humidity</strong> <strong className="text-[#1363DF]">{outside.humidity.value} {outside.humidity.unit}</strong></span>
                        </div>
                    </div>
                </div>

                <div className="grid border col-span-3 p-3 w-full">
                    <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                        <PiHouseSimpleBold size={25} />
                        <strong>House Node</strong>
                    </div>
                    <div className="grid mt-2">
                        <span className="flex justify-between"><strong className=" font-extrabold">Temp</strong> <strong className="text-[#1363DF]">{houseNode.temp.value} °C</strong></span>
                        <span className="flex justify-between"><strong className=" font-extrabold">Humidity</strong> <strong className="text-[#1363DF]">{houseNode.humidity.value} %</strong></span>
                        <span className="flex justify-between"><strong className=" font-extrabold">Light</strong> <strong className="text-[#1363DF]">{houseNode.light.value} lux</strong></span>
                        {/* <span className="flex justify-between"><strong className=" font-extrabold">Wind</strong> <strong className="text-[#1363DF]">{houseNode.wind.value} f/m</strong></span>
                        <span className="flex justify-between"><strong className=" font-extrabold">Ammonia</strong> <strong className="text-[#1363DF]">{houseNode.ammonia.value} ppm</strong></span> */}
                    </div>
                </div>
                {/* <div className="flex gap-2 col-span-3">
                    <div className="grid border p-3 w-full">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2 h-max" >
                            <strong>SILO (kilo)</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Balance</strong> <strong className="text-[#1363DF]">1.92</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Daily</strong> <strong className="text-[#1363DF]">0.52</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Total</strong> <strong className="text-[#1363DF]">12.17</strong></span>
                        </div>
                    </div>
                    <div className="grid border p-3 w-full">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2 h-max" >
                            <FaBolt size={25} />
                            <strong>Power (kwh)</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Daily</strong> <strong className="text-[#1363DF]">50.17</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Total</strong> <strong className="text-[#1363DF]">1,231.21</strong></span>
                        </div>
                    </div>
                </div> */}

                {/* <div className="grid col-span-3 border p-3 w-full">
                    <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                        <MdOutlineWaterDrop size={25} />
                        <strong>Water (㎥)</strong>
                    </div>
                    <div className="grid mt-2">
                        <span className="flex justify-between"><strong className=" font-extrabold">Daily</strong> <strong className="text-[#1363DF]">1.02</strong></span>
                        <span className="flex justify-between"><strong className=" font-extrabold">Total</strong> <strong className="text-[#1363DF]">192.45</strong></span>
                    </div>
                </div> */}
                <div className="grid col-span-3 border p-3 w-full">
                    <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                        <PiFanBold size={25} />
                        <strong>Status Fans</strong>
                    </div>
                    <div className="grid mt-2">
                        <span className="flex justify-between"><strong className=" font-extrabold">FAN1</strong> <strong className="text-[#1363DF]">NORMAL</strong></span>
                        <span className="flex justify-between"><strong className=" font-extrabold">FAN2</strong> <strong className="text-[#1363DF]">NORMAL</strong></span>
                        <span className="flex justify-between"><strong className=" font-extrabold">FAN3</strong> <strong className="text-[#1363DF]">NORMAL</strong></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export { ChickenHousePage }