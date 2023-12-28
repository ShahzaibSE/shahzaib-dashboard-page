import React from "react";
import Profile from "./profile/profile";
import DashboardAdCard, {
  DashboardAdModel,
} from "./dashboard_ad_card";
import { ScrollArea } from "@/components/ui/scroll-area";

const dashboard_ads: DashboardAdModel[] = [
  {
    title: "Marketplace",
    description:
      "Dive into our Marketplace, where style meets convenience. Shop for shoes that step up your game, home decor that transforms spaces, and kitchenware that sparks joy. Your perfect find awaits!",
  },
  {
    title: "Takeout",
    description:
      "Satisfy your cravings with Takeout! From breakfast bites to global cuisines for lunch or dinner, savor restaurant-quality meals delivered to your doorstep. Flavorful moments start here.",
  },
  {
    title: "Grocery",
    description:
      "Explore local goodness in our Grocery Mode. Fresh produce, pantry essentials – all at your fingertips. Support local farms and businesses while curating your kitchen essentials. Nourish your home effortlessly.",
  },
];

export default function Dashboard() {
  return (
    <div className="flex lg:flex-row">
      <Profile />
      <div className="flex flex-col justify-between gap-4 p-6 w-full xl:w-2/4">
        <h1 className="text-lg font-bold">
          Dashboard
        </h1>
        <div className="flex flex-col justify-between">
          <ScrollArea className="h-3/4">
            <div className="flex flex-col justify-between gap-4">
              {dashboard_ads.map(
                (
                  item: DashboardAdModel,
                  index: number
                ) => (
                  <DashboardAdCard
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                )
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div></div>
    </div>
  );
}
