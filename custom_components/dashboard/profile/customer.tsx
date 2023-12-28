import React from 'react'

export default function Customer() {
  return (
    <div className="flex flex-col p-5 justify-around gap-6">
        <div className="flex flex-row justify-between">
            <p className="text-[#F4F5F1] text-md">WELCOME <br/>BACK</p>
            <p className="text-[#F4F5F1] text-md">BALANCE</p>
        </div>
        <div className="flex flex-row justify-between">
            <p className="text-[#F4F5F1] text-xl font-bold">Hannah</p>
            <p className="text-[#F4F5F1] text-xl font-bold">$780.00</p>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <p className="text-sm text-[#F4F5F1]">Address</p>
          <div className="bg-yellow-400 w-36 h-10 rounded-full flex flex-col justify-center">
            <p className="text-[#20262C] text-sm text-center">123 ABC ST</p>
          </div>
        </div>
    </div>
  )
}
