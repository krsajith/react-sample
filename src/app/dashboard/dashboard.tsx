import { useState } from "react";

const Dashboard = () => {
  const [counter, setCounter] = useState(0)
  
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to Our App</h1>
      <p className="text-gray-600">This is a demo of TanStack Router</p>
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => setCounter(prev => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Count: {counter}
        </button>
      </div>
    </div>
  )
}

export default Dashboard;



