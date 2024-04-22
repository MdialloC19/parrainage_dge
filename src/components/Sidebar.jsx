import React from "react";
import { ChevronFirst } from "lucide-react";
export default function Sidebar({ children }) {
  return (
    <aside className="h-screen w-full bg-gray-400">
      <nav className="h-full flex flex-col  border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src="./images/symbole.svg" alt="symbole" className="w-10" />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <ChevronFirst />
          </button>
        </div>
        <ul className="flex-1 px-3 ">{children}</ul>
        <div className="border-t flex p-3">
          <img
            src="../images/symbole.svg"
            alt="test"
            className="w-10 h-10 rounded-md"
          />
          <div className="flex justify-between items-center w-52 ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">Moussa</h4>
              <span className="text-xs text-gray-600">Moussa@esp.sn</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
