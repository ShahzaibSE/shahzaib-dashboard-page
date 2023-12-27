import React from 'react'
import Customer from './customer'

export default function Profile() {
  return (
    <div className="flex flex-col p-2 justify-start bg-[#20262C] min-h-screen lg:w-1/5">
        <div>
            <Customer />
        </div>
    </div>
  )
}
