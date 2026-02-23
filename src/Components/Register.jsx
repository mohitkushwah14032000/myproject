import { use } from "react";
import { useState } from "react";

const Register = () => {

    const data = { name: "", email: "", password: "" }
    const [inputdata, setInputdata] = useState(data);
    const [flag, setFlag] = useState(false);
    const [submitname, setSubmitname] = useState("")

    const handledata = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
        console.log(inputdata)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!inputdata.name || !inputdata.email || !inputdata.password) {
            alert("Fill Data")
        } else {
            setSubmitname(inputdata.name)
            setInputdata(data)
            setFlag(true)
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <pre>
                {(flag)&&<h2 className="font-bold text-[1.3rem] bg-gray-300 py-2 px-3">hello, {submitname}, you have registerd</h2>}
            </pre>
            <form className='bg-sky-500 py-4 px-4 font-bold text-white mt-8' onSubmit={handlesubmit}>
                <h1 className="text-[2rem] font-bold">Registration Form</h1>

                <div className="bg-sky-500 py-4 px-4 font-bold text-white mt-8 rounded">

                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        name='name'
                        value={inputdata.name}
                        onChange={handledata}
                        className="mt-2 w-full py-2 px-2 bg-white text-black 
                                   placeholder:text-gray-500 
                                   border border-gray-400 
                                   outline-none rounded focus:ring-2"
                    />

                    <input
                        type='email'
                        placeholder='Enter your Email'
                        name='email'
                        value={inputdata.email}
                        onChange={handledata}
                        className="mt-2 w-full py-2 px-2 bg-white text-black
                                   placeholder:text-gray-500
                                   border border-gray-400 
                                   outline-none rounded focus:ring-2"
                    />

                    <input
                        type='text'
                        placeholder='Enter your Password'
                        name='password'
                        value={inputdata.password}
                        onChange={handledata}
                        className="mt-2 w-full py-2 px-2 bg-white text-black
                                   placeholder:text-gray-500
                                   border border-gray-400 
                                   outline-none rounded focus:ring-2"
                    />

                    <button type="submit"
                        className="mt-4 w-full py-3 px-2  border border-gray-400 
                    outline-none rounded focus:ring-2 bg-white text-black"
                    >Submit</button>

                </div>
            </form>
        </div>
    )
}

export default Register;