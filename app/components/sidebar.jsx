"use client";
import React from "react";
import {
  BuildingLibraryIcon,
  HeartIcon,
  HomeIcon,
  PlusCircleIcon,
  RssIcon,
} from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="text-gray-500 p-5 text-sm border-gray-900">
      <div className="space-y-4">
        <buton className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p className="">Home</p>
        </buton>
        <buton className="flex items-center space-x-2 hover:text-white">
          <FaSearch className="h-5 w-5" />
          <p className="">Search</p>
        </buton>
        <buton className="flex items-center space-x-2 hover:text-white">
          <BuildingLibraryIcon className="h-5 w-5" />
          <p className="">Your Library</p>
        </buton>
        <hr className="border-t-[0.1px] border-gray-900" />
        <buton className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p className="">Create PlayList</p>
        </buton>
        <buton className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p className="">Liked Songs</p>
        </buton>
        <buton className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p className="">Your Episodes</p>
        </buton>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* PlayList From Spotify Api */}
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
        <p className="cursor-pointer hover:text-white text-gray-500">PlayList names...</p>
      </div>
    </div>
  );
};

export default Sidebar;
