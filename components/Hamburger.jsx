import React from "react";
import HamburgerSubMenu from "../components/HamburgerSubMenu";
import { menuItems } from "../constants/menuItems";
import Link from "next/link";

// TODO: Handle Click outside of Hamburger

const Hamburger = () => {
  console.log(menuItems[0].title, menuItems[1].title);
  return (
    <div className="z-10 bg-white border-2 border-black w-screen right-0 top-20 fixed">
      {menuItems.map((x) => {
        return (
          <>
            <h1
              key={x.title}
              className="bg-gray-100 text-center font-extrabold"
            >
              {x.title}
            </h1>
            <div className="flex flex-col text-center">
              {x.children.map((y) => {
                return (
                  <Link
                    href={y.url}
                    key={y.title}
                    className="hover:bg-gray-200"
                  >
                    {y.title}
                  </Link>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Hamburger;
