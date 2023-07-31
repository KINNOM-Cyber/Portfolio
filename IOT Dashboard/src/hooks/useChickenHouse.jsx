import { useState } from "react"

const useChickenHouse = () => {
    const [egg, setEgg] = useState({ daily: 10, total: 40 })
    const [outside, setOutside] = useState({
        temp: {
            value: 35.21,
            unit: "°C"
        },
        humidity: {
            value: 49.30,
            unit: "%"
        }
    })
    const [houseNode, setHouseNode] = useState({
        temp: {
            value: 26.10,
            unit: "°C"
        },
        humidity: {
            value: 42.30,
            unit: "%"
        },
        light: {
            value: 32,
            unit: "lux"
        },
        wind: {
            value: 302.12,
            unit: "f/m"
        },
        ammonia: {
            value: 0.11,
            unit: "ppm"
        },
    })
    const [silo, setSilo] = useState({
        unit: "kilo",
        balance: 1.92,
        daily: 0.52,
        total: 12.17
    })
    const [waterUsage, setWaterUsage] = useState({
        unit: "㎥",
        daily: 1.02,
        total: 192.45
    })
    const [powerUsage, setPowerUsage] = useState({
        unit: "kwh",
        daily: 50.17,
        total: 1231.21
    })
    const [statusFans, setStatusFans] = useState([
        {
            node: "FAN1",
            value: 2000,
            unit: "RPM"
        },
        {
            node: "FAN2",
            value: 2000,
            unit: "RPM"
        },
        {
            node: "FAN3",
            value: 1900,
            unit: "RPM"
        },
    ])

    return {
        egg,
        setEgg,
        outside,
        setOutside,
        houseNode,
        setHouseNode,
        silo,
        setSilo,
        waterUsage,
        setWaterUsage,
        powerUsage,
        setPowerUsage,
        statusFans,
        setStatusFans
    }
}

export { useChickenHouse }