import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apicrud = () => {

  const [post, setPost] = useState([])
  const [inputdata, setInputdata] = useState("")

  const URL = 'https://jsonplaceholder.typicode.com/users';


  const fetchpost = async () => {
    try {
      const bro = await axios.get(URL);
      setPost(bro.data)
      console.log(bro.data)
    } catch (error) {
      console.log("Error in data", error)
    }
  };

  useEffect(() => {
    fetchpost()
  }, [])


  const handlesubmit = async () => {
    try {
      if (!inputdata.trim()) {
        alert('Enter data')
        return;
      }

      const mk = await axios.post(URL, {
        name: inputdata
      });
      const newpost = { ...mk.data }
      setPost([newpost,...post])
      setInputdata('')


    } catch (error) {

    }
  }

  return (
    <div className='min-h-screen flex items-center flex-col justify-center'>

      <div className=' flex gap-3'>
        <input
          type='text'
          placeholder='Enter Data'
          value={inputdata}
          onChange={(e) => setInputdata(e.target.value)}
          className='px-4 py-1 flex-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        <button
          onClick={handlesubmit}
          className='px-4 py-1 flex-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>Submit</button>
      </div>

      <div>
        {post.slice(0, 5).map((item) => (
          <ul key={item.id}>
            <li>
              {item.name}
              {item.email}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Apicrud
