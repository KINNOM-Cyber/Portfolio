import { useState } from "react";

const useFlowerHouse = () => {
    const [houseNode, setHouseNode] = useState({
        temp: {
            value: 31.21,
            unit: "°C",
        },
        humidity: {
            value: 42.30,
            unit: "%"
        }
    })
    const [soilMoisture, setSoilMoisture] = useState({
        humidity: {
            value: 22.30,
            unit: "%"
        }
    })
    const [statusFans, setStatusFans] = useState([
        {
            nodee: "FA1",
            value: 0,
            unit: "RPM"
        },
        {
            nodee: "FA1",
            value: 0,
            unit: "RPM"
        }
    ])
    const [waterUsage, setWaterUsage] = useState({
        unit: "㎥",
        daily: 0.42,
        total: 76.29
    })
    const [powerUsage, setPowerUsage] = useState({
        unit: "kwh",
        daily: 42.01,
        total: 1112.12
    })

    return {
        houseNode,
        setHouseNode,
        soilMoisture,
        setSoilMoisture,
        statusFans,
        setStatusFans,
        waterUsage,
        setWaterUsage,
        powerUsage,
        setPowerUsage
    }
}

export { useFlowerHouse }