import Logo from "../assets/shared/logo.svg";
import Hamburger from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [logo, setLogo] = useState<boolean>(false);

  const handleClick = () => {
    setLogo(!logo);
  };

  return (
    <div className="absolute w-full">
      <div className="flex w-full items-center justify-between p-6 md:hidden">
        <img src={Logo} alt={Logo} />
        <img
          src={!logo ? Hamburger : Close}
          alt={!logo ? Hamburger : Close}
          onClick={handleClick}
          className="cursor-pointer"
        />
      </div>
      <div className="hidden w-full items-center justify-between md:flex lg:hidden">
        <img src={Logo} alt={Logo} className="p-6" />
        <div className="-mt-1 p-0 text-sm font-normal uppercase text-white">
          <Link to={"/"} className="bg-blackGray p-8 py-10">
            Home
          </Link>
          <Link to={"/destination"} className="bg-blackGray p-8 py-10">
            Destination
          </Link>
          <Link to={"/crew"} className="bg-blackGray p-8 py-10">
            crew
          </Link>
          <Link to={"/technology"} className="bg-blackGray p-8 py-10">
            technology
          </Link>
        </div>
      </div>
      <div className="hidden w-full items-center justify-between p-6 lg:flex">
        <img src={Logo} alt={Logo} />
        <div className="bg-blackGray/50 relative backdrop-blur-md">
          <hr className="gaya:block absolute -left-[70%] top-[50%] z-20 hidden h-px w-[75%] border-0 bg-white/60" />
          <div className="relative z-10 space-x-8 p-5 px-24 text-sm font-normal uppercase text-white/70">
            <Link to={"/"}>
              <b className="text-white">00</b> Home
            </Link>
            <Link to={"/destination"}>
              <b className="text-white">01</b> Destination
            </Link>
            <Link to={"/crew"}>
              <b className="text-white">02</b> crew
            </Link>
            <Link to={"/technology"}>
              <b className="text-white">03</b> technology
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
