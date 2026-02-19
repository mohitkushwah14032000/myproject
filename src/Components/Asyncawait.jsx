import { useEffect, useState } from "react";

const Asyncawait = () => {
    const [apidata, setApidata] = useState([]);
    useEffect(() => {
        const fetchuser = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setApidata(data);
                console.log(data)
            } catch (error) {
                console.log("Error", error);
            }
        }
        fetchuser()

    }, [])
    return (
        <div>

            {apidata.map((item) => (
                <div key={item.id}>
                    <h2>Username : {item.username}</h2>
                    <h2>Email : {item.email}</h2>
                </div>
            ))}

        </div >
    )
}
export default Asyncawait;