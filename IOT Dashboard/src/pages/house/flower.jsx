import { PiHouseSimpleBold, PiGearSixBold, PiFanBold, PiPlantBold } from "react-icons/pi"
import { MdOutlineWaterDrop } from "react-icons/md"
import { FaBolt } from "react-icons/fa"

const FlowerHousePage = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-2 p-3">
                <div className="flex col-span-3 gap-2">
                    <div className="grid border p-3 w-full">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                            <PiHouseSimpleBold size={25} />
                            <strong>House Node</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Temp</strong> <strong className="text-[#1363DF]">31.21 °C</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Humidity</strong> <strong className="text-[#1363DF]">42.30 %</strong></span>
                        </div>
                    </div>
                    <div className="grid border p-3 w-full">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2 h-max" >
                            <PiPlantBold size={25} />
                            <strong>Soil Moisture</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Humidity</strong> <strong className="text-[#1363DF]">22.30 %</strong></span>
                        </div>
                    </div>
                </div>

                <div className="grid col-span-3 border p-3 w-full">
                    <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                        <PiFanBold size={25} />
                        <strong>Status Fans</strong>
                    </div>
                    <div className="grid mt-2">
                        <span className="flex justify-between"><strong className=" font-extrabold">FAN1</strong> <strong className="text-[#1363DF]">-- RPM</strong></span>
                        <span className="flex justify-between"><strong className=" font-extrabold">FAN2</strong> <strong className="text-[#1363DF]">-- RPM</strong></span>
                    </div>
                </div>
                <div className="flex col-span-3 gap-2">
                    <div className="grid col-span-3 border p-3 w-full">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2" >
                            <MdOutlineWaterDrop size={25} />
                            <strong>Water (㎥)</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Daily</strong> <strong className="text-[#1363DF]">0.42</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Total</strong> <strong className="text-[#1363DF]">76.29</strong></span>
                        </div>
                    </div>
                    <div className="grid border p-3 w-full">
                        <div className="flex items-center gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2 h-max" >
                            <FaBolt size={25} />
                            <strong>Power (kwh)</strong>
                        </div>
                        <div className="grid mt-2">
                            <span className="flex justify-between"><strong className=" font-extrabold">Daily</strong> <strong className="text-[#1363DF]">42.01</strong></span>
                            <span className="flex justify-between"><strong className=" font-extrabold">Total</strong> <strong className="text-[#1363DF]">1,112.12</strong></span>
                        </div>
                    </div>
                </div>
                {/* <div className="flex gap-2 items-center col-span-3">
                    <div className="grid col-span-1 w-full">
                        <div className="" >
                            <label htmlFor="sunroof-checkbox" className="flex justify-between item-center p-3 border">
                                <div className="flex items-center justify-between gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2">
                                    <PiGearSixBold size={25} />
                                    <strong className="">Sun Roof</strong>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input id="sunroof-checkbox" type="checkbox" class="sr-only peer" />
                                    <div class="w-11 h-6 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer bg-gray-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
                                </label>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center col-span-3">
                    <div className="grid col-span-1 w-full">
                        <div className="" >
                            <label htmlFor="" className="flex justify-between item-center p-3 border">
                                <div className="flex items-center justify-between gap-1 before:content-[''] before:h-[70%] before:absolute before:left-0 before:w-1 before:bg-[#1363DF] before:rounded-full  relative px-2">
                                    <PiGearSixBold size={25} />
                                    <strong className="">automatic watering plants</strong>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="time" name="" id="" />
                                </label>
                            </label>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export { FlowerHousePage }