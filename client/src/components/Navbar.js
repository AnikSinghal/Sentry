import React from 'react'
import {Link} from "react-router-dom"

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='bg-black bg-opacity text-white w-full'>
           <div className='flex justify-between items-center w-full max-w-[1160px] py-4 mx-auto px-6'>
                <nav>
                    <ul className='text-white flex gap-x-12'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>

                <div className='flex items-center gap-x-4'>
                    { isLoggedIn &&
                        <>
                            <Link to="/login">
                                <button className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded border border-gray-700'>
                                    Log Out
                                </button>
                            </Link>

                        </>
                    }
                    { !isLoggedIn &&
                        <>
                            <Link to="/">
                                <button onClick={() => setIsLoggedIn(false)} className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded border border-gray-700'>
                                    Log In
                                </button>
                            </Link>
                            <Link to="/dashboard">
                                <button className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded border border-gray-700'>
                                    Sign In
                                </button>
                            </Link>
                        </>
                    }
                </div>
            </div>

    </div>
  )
}

export default Navbar;