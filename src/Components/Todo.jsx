import { useState } from "react"

const Todo = () => {

    const [inputdata, setInputdata] = useState("")
    const [listdata, setListdata] = useState([])

    const handleadd = () => {
        if (!inputdata.trim()) {
            alert("Enter Details");
            return;
        }

        setListdata([...listdata, { text: inputdata, completed: false }])
        setInputdata("")
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-500">TODO LIST</h1>
            <div className="flex gap-3 max-w-md mb-6">
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={inputdata}
                    onChange={(e) => {
                        setInputdata(e.target.value)
                        console.log(e.target.value)
                    }}
                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                />
                <button
                    className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2"
                    onClick={handleadd}>
                    ADD
                </button>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Todo