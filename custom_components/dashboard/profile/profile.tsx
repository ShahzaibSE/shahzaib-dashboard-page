import React, { useState } from "react";
import Customer from "./customer";
import Link from "next/link";

export const more_options = [
  "Profile Settings",
  "My Orders",
  "Earnings",
  "FAQ",
  "Partner Program",
  "Contact Us",
];

export default function Profile() {
  return (
    <div className="hidden xl:flex xl:flex-col p-2 justify-between bg-[#20262C] min-h-screen xl:w-4/12 xl:max-w-80">
      <div>
        <Customer />
      </div>
      <div className="flex flex-col justify-between gap-2 p-5">
        <h1 className="text-yellow-300 text-lg">
          More Options
        </h1>
        <div className="flex flex-col justify-between gap-1">
          {more_options.map((item, index) => (
            <p
              className="text-[#F4F5F1] text-md"
              key={index}
            >
              {item}
            </p>
          ))}
          <Link
            href={"#"}
            className="text-[#F4F5F1] text-md"
          >
            Log Out
          </Link>
        </div>
      </div>
    </div>
  );
}
