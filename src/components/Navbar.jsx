import React from 'react'
import logo from "../img/logo.png"
function Navbar() {
  return (
    <div className='bg-[#000000cb]'>
        <div className='flex justify-between max-w-[1280px] mx-auto items-center h-[64px]'>
            <img className='h-[24px]' src={logo} alt="" />
            <div className='flex items-center gap-[10px]'>
                <select className='font-[400] text-[16px] text-[#ffffff] bg-[#0000]' name="" id="">
                    <option value="">USD</option>
                    <option value="">USD</option>
                </select>
                <button className='w-[133px] h-[40px] bg-[#87CEEB] text-[#000] text-[14px] font-[600] rounded-[5px]'>WATCH LIST</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar