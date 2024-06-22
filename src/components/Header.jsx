import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import "./header.css";
import Select from "./Select";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingCart,
} from "react-icons/md";
import SearchBar from "./SearchBar";
import { CiLocationOn, CiUser } from "react-icons/ci";
import Menubar from "./Menubar";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowsSpin } from "react-icons/fa6";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [locationToggle, setLocationToggle] = useState(false);
  const [itemName, setItemName] = useState("All Categories");
  const [locationName, setLocationName] = useState("Your Location");

  const btnDisplay = () => {
    setToggle(!toggle);
  };
  const btnLocationDisplay = (tf) => {
    setLocationToggle(tf);
  };

  const handleItemClick = (item) => {
    setItemName(item);
    setToggle(false); // close the dropdown after selection
  };

  const handleLocationClick = (item) => {
    setLocationName(item);
    setLocationToggle(false); // close the dropdown after selection
  };

  const handleLocationIconClick = () => {
    btnLocationDisplay(!locationToggle); // Toggle location display state
  };

  const items = [
    "All Category",
    "Milks and Dairies",
    "Clothing & beauty",
    "Pet Foods & Toy",
    "Baking material",
    "Fresh Fruit",
    "Wines & Drinks",
    "Fresh Seafood",
    "Fast food",
    "Vegetables",
    "Bread and Juice",
  ];

  const locations = [
    "Your Location",
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Gandhinagar",
    "Nadiad",
    "Anand",
  ];
  const icons = [
    {
      icon: FaArrowsSpin ,
      name: "Compare",
    },
    {
      icon: FaRegHeart,
      name: "Wishlist",
    },
    {
      icon: MdOutlineShoppingCart,
      name: "Cart",
    },
    {
      icon: CiUser,
      name: "User",
    },
  ];
  return (
    <>
      <div className="header ">
        <div className="header_data  flex items-center gap-[40px] ">
          <div className="header_logo">
            <img src={logo} alt="Logo" />
          </div>
          {/* =========left side ========= */}
          <div className="header_search_drop p-4 rounded border-2 border-[#BCE3C9] h-[50px] w-[700px]">
            <div
              className="header_drop_down flex items-center"
              onClick={btnDisplay}
            >
              {itemName}
              <span className="inline-block px-5">
                <MdOutlineKeyboardArrowDown />
              </span>
              {toggle ? (
                <Select itemData={items} onItemClick={handleItemClick} />
              ) : (
                ""
              )}
            </div>
            <div className="header_searchbar flex">
              <SearchBar />
            </div>
          </div>
          {/* =========right side ========= */}
          <div
            className="header_location  h-10 w-44 position-relative  rounded border-2 border-[#ececec] "
            onMouseEnter={() => btnLocationDisplay(false)}
          >
            <div
              className="header_drop_down  py-2 gap-2 location flex items-center"
              onMouseLeave={() => btnLocationDisplay(false)}
            >
              <span className="inline-block text-xl pl-1">
                <CiLocationOn />
              </span>
              {locationName}
              <MdOutlineKeyboardArrowDown className="cursor-pointer" onClick={handleLocationIconClick}/>
              {locationToggle ? (
                <Select
                  itemData={locations}
                  onItemClick={handleLocationClick}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="header_menu_option w-[408px] h-10 flex items-center justify-center">
            <Menubar  iconsData={icons} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
