import React from "react";

export default function OrderList() {
  return (
    <div className="flex flex-col justify-start items-center my-20 gap-6">
      <h1 className="text-yellow-300 text-lg font-bold">
        Current Orders
      </h1>
      <div className="flex flex-col justify-between gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <h1> {">"} </h1>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">
              #[Order Num]
            </p>
            <p className="text-sm">
              [STORE Name]
            </p>
            <p className="text-sm">[STATUS]</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <h1> {">"} </h1>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">
              #[Order Num]
            </p>
            <p className="text-sm">
              [STORE Name]
            </p>
            <p className="text-sm">[STATUS]</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <h1> {">"} </h1>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">
              #[Order Num]
            </p>
            <p className="text-sm">
              [STORE Name]
            </p>
            <p className="text-sm">[STATUS]</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <h1> {">"} </h1>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">
              #[Order Num]
            </p>
            <p className="text-sm">
              [STORE Name]
            </p>
            <p className="text-sm">[STATUS]</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <h1> {">"} </h1>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">
              #[Order Num]
            </p>
            <p className="text-sm">
              [STORE Name]
            </p>
            <p className="text-sm">[STATUS]</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <h1> {">"} </h1>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-sm">
              #[Order Num]
            </p>
            <p className="text-sm">
              [STORE Name]
            </p>
            <p className="text-sm">[STATUS]</p>
          </div>
        </div>
      </div>
        <p className="text-yellow-300 text-left text-md font-bold">
          SEE ALL
        </p>
    </div>
  );
}
