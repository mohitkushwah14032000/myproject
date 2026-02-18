import React, { useEffect, useState } from 'react'
import Apiprop from './src/Components/Apiprop'
import Staticprop from './src/Components/Staticprop'

const Home = () => {
    const [apidata, setApidata] = useState([])

    const menu = [
        { name: "Burger", Price: "Rs.25", icon: "🍔" },
        { name: "Pizza", Price: "Rs.110", icon: "🍕" },
        { name: "Cupcake", Price: "Rs.50", icon: "🧁" },
        { name: "Ice Cream", Price: "Rs.20", icon: "🍦" }
    ]


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setApidata(data),
                    console.log(data)
            })
            .catch(error => console.log("Error", error))
    }, [])
    return (
        <div className='w-full bg-white p-4 rounded shadow flex flex-row'>
            <div className='w-1/3'>
                {menu.map((item, index) => (
                    <Staticprop key={index} data={{...item,name:"mumbai"}}></Staticprop>
                ))}
            </div>
            <div>
                <Apiprop userdata={apidata}></Apiprop>
            </div>
        </div>
    )
}

export default Home
