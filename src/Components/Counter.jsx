import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className='min-h-screen flex items-center justify-center flex-col font-bold'>
                <h1>Counter : {count}</h1>
                <div className='flex items-center justify-center gap-5'>
                    <button onClick={(e) => setCount(count + 1)}>Increment</button>
                    <button onClick={(e) => setCount(count - 1)}>Decrement</button>
                    <button onClick={(e) => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
