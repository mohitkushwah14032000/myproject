import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Apicrud = () => {

  const [post, setPost] = useState([])
  const [inputdata, setInputdata] = useState("")
  const [editpost, setEditpost] = useState(null)

  const URL = 'https://jsonplaceholder.typicode.com/users';

  // FETCH
  const fetchpost = async () => {
    try {
      const res = await axios.get(URL);
      const modified = res.data.map((item) => ({...item,completed: false }))
      setPost(modified)
    } catch (error) {
      console.log("Error", error)
    }
  };

  useEffect(() => {
    fetchpost()
  }, [])

  // ADD
  const handlesubmit = async () => {

    if (!inputdata.trim()) {
      alert("Enter data")
      return;
    }

    try {
      const res = await axios.post(URL, {
        name: inputdata
      })

      const newpost = { ...res.data, completed: false }

      // ✅ direct state use
      setPost([newpost, ...post])

      setInputdata("")

    } catch (error) {
      console.log("Error", error)
    }
  }

  // DELETE
  const deletepost = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`)

      const filtered = post.filter((item) => item.id !== id)
      setPost(filtered)

    } catch (error) {
      console.log("Error", error)
    }
  }

  // EDIT SELECT
  const handledit = (item) => {
    setEditpost(item)
    setInputdata(item.name)
  }

  // UPDATE
  const updatedlist = async () => {
    try {

      const res = await axios.patch(`${URL}/${editpost.id}`, {
        name: inputdata
      })

      const updatedData = {...editpost,...res.data
      }

      const updatedArray = post.map((item) =>
        item.id === editpost.id ? updatedData : item
      )

      setPost(updatedArray)

      setEditpost(null)
      setInputdata("")

    } catch (error) {
      console.log("Error", error)
    }
  }

  // TOGGLE
  const markToggle = (id) => {

    const updated = post.map((item) =>
      item.id === id
        ? { ...item, completed: !item.completed }
        : item
    )

    setPost(updated)
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">

    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">

      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        User CRUD App
      </h2>

      {/* Input Section */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter Name"
          value={inputdata}
          onChange={(e) => setInputdata(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          onClick={editpost ? updatedlist : handlesubmit}
          className={`px-4 py-2 rounded-lg text-white font-medium transition 
          ${editpost 
            ? "bg-yellow-500 hover:bg-yellow-600" 
            : "bg-indigo-500 hover:bg-indigo-600"}`}
        >
          {editpost ? "Update" : "Add"}
        </button>
      </div>

      {/* List Section */}
      <div className="space-y-4">
        {post.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col gap-3"
          >

            <div className={`font-semibold text-gray-700 
              ${item.completed ? "line-through text-gray-400" : ""}`}>
              {item.name}
            </div>

            <div className="text-sm text-gray-500">
              {item.email}
            </div>

            <div className="flex gap-2">

              <button
                onClick={() => deletepost(item.id)}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-1 rounded-lg transition"
              >
                Delete
              </button>

              <button
                onClick={() => handledit(item)}
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-1 rounded-lg transition"
              >
                Edit
              </button>

              <button
                onClick={() => markToggle(item.id)}
                className={`flex-1 py-1 rounded-lg text-white transition
                ${item.completed 
                  ? "bg-gray-400 hover:bg-gray-500" 
                  : "bg-green-500 hover:bg-green-600"}`}
              >
                {item.completed ? "Unmark" : "Mark"}
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
);
}

export default Apicrud