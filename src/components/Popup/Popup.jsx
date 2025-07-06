import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopup,setorderPopup}) => {
  return (
    <>
      {
        orderPopup && (
            
        <div className='popup'>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md'>
                {/* header */}
                {/* body section */}
            </div>
            </div>
        </div>
        )}
    </>
  )
}

export default Popup
