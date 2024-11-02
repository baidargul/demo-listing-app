import { Dumbbell } from "lucide-react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-[1fr_auto] items-center p-4 bg-zinc-200 fixed top-0 w-full z-10">
        <a href="/">
          <div className="text-md min-w-[110px] sm:text-2xl font-semibold tracking-tight first-letter:font-bold flex flex-col sm:flex-row items-center gap-0 sm:gap-1 text-red-900 group cursor-pointer">
            <Dumbbell className="w-5 h-5 -rotate-45 sm:rotate-45 text-red-900 fill-red-800 group-hover:-rotate-45 transition-all duration-1000" />
            <span className="group-hover:pl-2 transition-all duration-1000 delay-900">
              IronHub Gym
            </span>{" "}
            <span className="text-xs opacity-50 hidden sm:block">Demo</span>
          </div>
        </a>
        <div className="flex items-center gap-2  p-2 px-5 rounded-md hover:bg-zinc-100 group cursor-pointer transition-all duration-200">
          <img
            src="/images/me.png"
            width={500}
            height={500}
            className="w-10 h-10 min-w-[42px]  sm:w-14 sm:h-14 rounded-full bg-white p-1 group-hover:ring-1 ring-zinc-200 transition-all duration-500"
          />
          <span className="hidden sm:block font-semibold text-lg leading-none">
            <div>Baidar Gul</div>
            <a
              href="tel:+923438793471"
              className="text-xs font-normal tracking-tight"
            >
              +92 343 8793 471
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
