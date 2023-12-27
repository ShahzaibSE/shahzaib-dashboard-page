import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex justify-start bg-[#20262C] w-full">
        <div className="m-4">
            <Image alt="Dashboard logo" src="/assets/header-logo.png" width="40" height="40"/>
        </div>
    </div>
  )
}
