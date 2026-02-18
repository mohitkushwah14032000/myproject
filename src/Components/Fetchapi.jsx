import { useEffect, useState } from "react"

const Fetchapi = () => {

    const [fetchapi, setFetchapi] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setFetchapi(data);
                console.log(data)
            })
            .catch(error => console.log("Error", error))
    }, [])

    return (
        <div className="">
            {fetchapi.map((item) => (
                <ul key={item.id}>
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    )

}
export default Fetchapi