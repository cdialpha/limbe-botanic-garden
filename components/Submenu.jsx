import React from "react";
import Link from "next/link";

const Submenu = ({ parent, items }) => {
  console.log(parent);
  return (
    <div
      className="z-50 bg-white border-2 border-black w-screen right-0 top-20 fixed "
      data-item={parent}
    >
      {items.map((item, index) => (
        <div className="text-center bg-slate-100 mt-2 mb-2" key={item.title}>
          <Link href={item.url} className="hover:text-primary">
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
