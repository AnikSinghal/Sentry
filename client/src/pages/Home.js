import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='flex ml-[100px] mt-[100px] text-white text-3xl h-full flex-col'>
        <h1 className="text-5xl mb-6">Welcome to the Home Page</h1>
        <div className="flex flex-col gap-4 mt-[100px]">
            <Link to="/add-members">
                <button className="bg-black  text-white py-2 px-4 rounded-[15px] border border-gray-700">
                    Add Members
                </button>
            </Link>
            <Link to="/view-members">
                <button className="bg-black text-white py-2 px-4 rounded-[15px] border border-gray-700">
                    View Members
                </button>
            </Link>
        </div>
    </div>
    
  )
}

export default Home