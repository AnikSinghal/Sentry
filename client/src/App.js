import './App.css';
import Navbar from "./components/Navbar"
import Modal from "./components/Modal";
import {useState } from 'react';
import ViewMembers from './components/ViewMembers';

function App() {
  const [showModel, setShowModal] = useState(false)

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className='w-screen h-screen bg-gray-700 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div className='flex ml-[100px] mt-[100px] text-white text-3xl h-full flex-col'>
        <h1 className="text-5xl mb-6">Welcome to the Home Page</h1>
        <div className="flex flex-col gap-4 mt-[100px]">
            <button onClick={() => setShowModal(true)} className="bg-black text-white py-2 px-4 rounded-[15px] border border-gray-700">
                    Add Members
                </button>
                {showModel && <Modal/>}
                <button className="bg-black text-white py-2 px-4 rounded-[15px] border border-gray-700">
                    View Members
                </button>
        </div>
        <ViewMembers/>
    </div>
    </div>
  );
}

export default App;
