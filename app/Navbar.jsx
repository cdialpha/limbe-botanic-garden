"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../styles/globals.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
import logo from "../public/limbe_logo.jpeg";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../constants/responsive";
import Hamburger from "../components/Hamburger";
import { menuItems } from "../constants/menuItems";
import SubMenu from "../components/Submenu";

const Navbar = () => {
  const NavItemTitles = ["About", "Visit", "Learn", "Support"];
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const menuRef = useRef([]);
  // console.log(menuRef);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log("click");
  };

  useEffect(() => {
    //alert if clicked on outside of element
    function handleClickOutside(event) {
      console.log("item", event.target.dataset.item);
      if (NavItemTitles.includes(event.target.dataset.item)) {
        console.log("success");
        setCurrentMenu(event.target.dataset.item);
      } else {
        setCurrentMenu(null);
      }
      // if (ref.current && !ref.current.contains(event.target)) {
      //   console.log("You clicked outside of me!");
      // }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isLaptop = useMediaQuery({ maxWidth: deviceSize.laptop });

  return (
    <div className="w-screen fixed z-50 bg-white ">
      {isOpen ? <Hamburger /> : null}
      <div className="h-20 flex justify-between">
        <div className="mt-auto mb-auto">
          <div className="">
            <div className="flex ml-5 ">
              <div className="md:mr-2 min-w-20">
                <Image
                  src={logo}
                  alt="logo"
                  height={50}
                  width={60}
                  className="mt-auto mb-auto"
                />
              </div>
              <h1 className="rubik font-bold text-xl">limbe botanic gardens</h1>
            </div>
          </div>
        </div>
        {isLaptop ? (
          <GiHamburgerMenu
            className="black fixed right-10 top-10 hover:scale-110"
            onClick={handleClick}
          />
        ) : (
          <div className="flex mt-auto mb-auto  justify-between text-black font-extrabold">
            {menuItems.map((navItem, index) => (
              <div className="flex mr-5">
                <div
                  // ref={() => (menuRef.current[index] = navItem.title)}
                  key={index}
                  data-item={navItem.title}
                  className={`${
                    currentMenu == navItem.title
                      ? "border-green-800"
                      : "border-slate-200"
                  } border-b-4 ml-2 mr-2`}
                  // onClick={(event) => handleMenuClick(event, navItem.title)}
                >
                  {navItem.title}
                  {currentMenu == navItem.title ? (
                    <SubMenu
                      parent={navItem.title}
                      items={navItem.children}
                      key={index}
                      className="transition ease-in-out"
                    />
                  ) : null}
                </div>
                <BsChevronDown
                  className={`mt-auto mb-auto ${
                    currentMenu == navItem.title ? null : "invisible"
                  }`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
