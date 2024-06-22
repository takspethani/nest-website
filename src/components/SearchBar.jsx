import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return <>
    <input type="text" className="pl-2 outline-none border-l-2 w-[28rem] h-5 border-[#CACACA]" placeholder="Search for items" />
    <span><IoSearchOutline className="text-[1.3rem] text-gray-500" /></span>
  </>;
}

export default SearchBar;
