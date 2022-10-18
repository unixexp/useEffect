import React, { useState, useEffect } from "react";

const App = () => {

    const cars = ["Toyota", "Honda", "Ferrari", "BMW", "Opel", "Nissan"]
    const [ carId, setCarId ] = useState(0)
    const [ car, setCar ] = useState(null)
    const [ loading, setLoading] = useState(false)

    const handleSetCarId = () => {
        console.log("Car id changed")
        setCarId((prevId) => {
            let newCarId = prevId
            while (newCarId == prevId) {
                newCarId = Math.floor(Math.random() * cars.length)
            }
            return newCarId
        })
    }

    useEffect(() => {
        let randomNumber = Math.floor(Math.random() * 100)
        let canceled = false
        console.log(`useEffect: ${randomNumber}`)
        console.log("Set loading = true")
        setLoading(true)
        
        console.log("Run loading Promise")

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(cars[carId])
            }, 5000)
        }).then(car => {
            if (!canceled) {
                console.log(`Loaded car "${car}"`)
                setCar(car)
                setLoading(false)
            } else {
                console.log(`Loaded car "${car} - canceled"`)
            }
        })

        return () => { canceled = true }
    }, [carId])

    return (
        <div style={{ }}>
            <button
                    onClick={ handleSetCarId }
                    style={{ padding: "10px", cursor: "pointer" }}>
                change
            </button>
            <div>Car id: { carId }</div>
            <div>Car: { loading ? "Loading..." : car }</div>
            { console.log("Rendered") }
        </div>
    );

};

export default App;