import React from "react";
import palms from "../public/palms_dark.jpg";
import Image from "next/image";
import Link from "next/link";
import futechLogo from "../public/futech_logo_bgremoved.png";

const Hero = () => {
  return (
    <div className=" flex flex-col w-full relative h-[500px] md:max-h-full bg-dark-one">
      <Image
        src={palms}
        fill
        alt="architectural background for hero image"
        className="max-h-[300px] md:max-h-full absolute"
      />
      <div className="z-10 mt-auto mb-auto bg-glass">
        <h1 className=" text-white  text-center font-extrabold text-6xl">
          Limbe Botanic Gardens
        </h1>
        <h1 className=" text-white  text-center font-extrabold text-2xl">
          est. 1892
        </h1>
        <div className="border-2 text-xl text-white w-40 rounded-2xl ml-auto mr-auto mt-10 text-center hover:bg-white hover:text-black">
          Plan your trip
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="w-11/12 md:w-9/12 z-10 mt-10 mb-auto mt-[200px] md:mt-auto ml-auto mr-auto bg-glass-dark rounded-2xl border border-black flex flex-col pl-5 md:pl-10 pb-10 font-bold text-primary-light rubik backdrop-blur-md">
<h1 className="text-4xl md:text-6xl lg:text-8xl pt-5 md:pt-10">
  Futech Consult
</h1>
<h2 className="text-xl md:text-2xl lg:text-4xl italic mt-5">
  secure ...
</h2>
<div className="flex flex-col md:flex-row md:text-2xl mt-5">
  <Link href={"/"}>
    <div className="flex">
      <span className="text-secondary md:hidden"> &lt; </span>
      <h3 className="hover:text-secondary-light">career coaching</h3>
      <span className="text-secondary md:hidden"> &gt; </span>
    </div>
  </Link>
  <h3 className="hidden md:block ml-4 mr-4"> | </h3>
  <Link href={"/"}>
    <div className="flex">
      <span className="text-secondary md:hidden"> &lt; </span>
      <h3 className="hover:text-secondary-light">
        cybersecurity training
      </h3>
      <span className="text-secondary md:hidden"> &gt; </span>
    </div>
  </Link>
  <h3 className="hidden md:block ml-4 mr-4"> | </h3>
  <Link href={"/"}>
    <div className="flex">
      <span className="text-secondary md:hidden"> &lt; </span>
      <h3 className="hover:text-secondary-light"> consulting </h3>
      <span className="text-secondary md:hidden"> &gt; </span>
    </div>
  </Link>
</div>
</div> */
}
