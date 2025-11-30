import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-pink-400 font-bold text-white flex items-centre justify-between p-7 '>
        <div>
            <h2 className='text-xl'>EXPENSE MANAGER</h2>
        </div>
        <div className='flex items-center justify-center gap-5 text-xl'>
            <h2>HOME</h2>
            <h2>ABOUT</h2>
            <h3>CONTACT ME</h3>
        </div>
    
    </div>
  )
}

export default Navbar
