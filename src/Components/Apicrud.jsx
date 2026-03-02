import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apicrud = () => {

  const [post, setPost] = useState([])
  const [inputdata, setInputdata] = useState("")
  const [editpost, setEditpost] = useState(null)

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
      setPost([newpost, ...post])
      setInputdata('')


    } catch (error) {

    }
  }

  const deletepost = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`)
      setPost(post.filter((p) => p.id !== id))
    } catch (error) {
      console.log("Error in Data", error)
    }
  }

  const handledit = (post) => {
    setEditpost(post)
    setInputdata(post.name)
  }

  const updatedlist = async () => {
    try {
      const mohit = await axios.patch(`${URL}/${editpost.id}`, {
        name: inputdata
      })
      const updatedata = { ...mohit.data }
      setPost(post.map((item) => (item.id === editpost.id ? updatedata : item)))
      setInputdata('');
      setEditpost(null);
    } catch (error) {
      console.log('Error in update', error);
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
          onClick={editpost ? updatedlist : handlesubmit}
          className='px-4 py-1 flex-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'>
             {editpost ? 'Update' : 'Add'} {/* button text change */}</button>
      </div>

      <div>
        {post.slice(0, 5).map((item) => (
          <ul key={item.id}>
            <li className='flex gap-2 mt-2'>
              {item.name}
              {item.email}
              <button className='py-1 px-2 bg-red-500 text-white rounded-lg'
                onClick={(e) => deletepost(item.id)}
              >Delete</button>

              <button className='py-1 px-2 bg-yellow-500 text-white rounded-lg'
                onClick={(e) => handledit(item)}
              >Edit</button>

            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Apicrud
