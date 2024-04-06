import React from 'react'
import { X } from 'lucide-react';

function Modal({ onClose }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
      <div>
          <button  onClick={onClose} className="absolute top-0 right-0 p-2">
            <X/>
          </button>
      </div>
    </div>
  )
}

export default Modal