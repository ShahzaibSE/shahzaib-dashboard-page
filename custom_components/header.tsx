import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "@/components/ui/button";
import { more_options } from "./dashboard/profile/profile";
import Customer from "./dashboard/profile/customer";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between bg-[#20262C] w-full">
        <div className="m-4">
          <Image
            alt="Dashboard logo"
            src="/assets/header-logo.png"
            width="40"
            height="40"
          />
        </div>
        <div className="flex items-center justify-center p-2 xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm font-bold">
                      WELCOME BACK
                    </p>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 my-4">
                <div className="flex flex-col gap-2 my-6">
                  <div className="flex flex-row justify-between">
                    <p className="text-xl font-bold">
                      Hannah
                    </p>
                    <p className="text-xl font-bold">
                      $780.00
                    </p>
                  </div>
                  <div className="flex flex-col justify-between gap-2">
                    <p className="text-sm">
                      Address
                    </p>
                    <div className="bg-yellow-400 w-36 h-10 rounded-xl flex flex-col justify-center">
                      <p className="text-[#20262C] text-sm text-center font-bold">
                        123 ABC ST
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4 my-4">
                  <h1 className="text-yellow-300 text-lg font-bold">
                    More Options
                  </h1>
                  <div className="flex flex-col justify-between gap-1">
                    {more_options.map(
                      (item, index) => (
                        <p
                          className="text-md"
                          key={index}
                        >
                          {item}
                        </p>
                      )
                    )}
                    <Link
                      href={"#"}
                      className="text-md font-bold my-4"
                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
