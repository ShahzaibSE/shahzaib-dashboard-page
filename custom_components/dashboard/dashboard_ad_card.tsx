import React from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export interface DashboardAdModel {
  title: string;
  description: string;
}

export default function DashboardAdCard({
  title,
  description,
}: DashboardAdModel) {
  return (
    <div className="w-full h-2/5 flex flex-col justify-between gap-6 bg-slate-500 p-4 xl:p-6 rounded-2xl xl:rounded-3xl">
      <h1 className="text-white font-bold text-lg">
        {title}
      </h1>
      <p className="text-md text-white">
        {description}
      </p>
      <div className="flex flex-col xl:flex-row xl:justify-start gap-4 xl:gap-8 xl:items-center">
        <div className="bg-yellow-400 w-40 h-10 rounded-full flex flex-col justify-center">
          <p className="text-[#20262C] text-sm text-center">
            SEARCH SETTINGS
          </p>
        </div>
        {/* <div className="flex flex-col justify-between items-center"> */}
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className="w-full xl:w-1/4"
        />
        {/* <p className="w-4 h-4">100 KM</p>
        </div> */}
      </div>
      <div className="flex flex-col gap-4 xl:flex-row xl:gap-0 justify-between">
        <div className="flex flex-col justify-between gap-2">
          <h1 className="text-white text-md font-bold">Filters</h1>
          <div className="flex gap-2 flex-row justify-between items-center xl:gap-2">
            <p>Near By</p>
            <p>Alphabatical</p>
            <p>Cash Back</p>
          </div>
        </div>
        <div className="bg-yellow-400 w-36 h-10 rounded-full flex flex-col justify-center">
          <p className="text-[#20262C] text-sm text-center">
            SHOP NOW
          </p>
        </div>
      </div>
    </div>
  );
}
