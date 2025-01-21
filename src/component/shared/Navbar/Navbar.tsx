"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="max-w-6xl mx-auto mt-3 md:mt-12">
      <div className="flex justify-between items-center py-6 md:py-0 px-4 md:px-0">
        <Link href="/">
          <div>
            <Image
              height={22}
              width={125}
              src="/Brand-logo.svg"
              alt="logo"
            ></Image>
          </div>
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-16 font-rubik">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/">ABOUT ME</Link>
            </li>
            <li>
              <Link href="/">MY WORKS</Link>
            </li>
            <li>
              <Link href="/">
                <button className="h-[47px] w-[138px] border-2 border-white rounded-[30px]">
                  CONTACT
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <button className="md:hidden text-[#FF9142]" onClick={toggleMenu}>
          {isMenuOpen ? <ImCross /> : <FaBars />}
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-[100px] left-0 right-0 bg-gray-800 py-6 shadow-lg">
            <ul className="flex flex-col items-center space-y-6 font-rubik">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/">ABOUT ME</Link>
              </li>
              <li>
                <Link href="/">MY WORKS</Link>
              </li>
              <li>
                <Link href="/">
                  <button className="h-[47px] w-[138px] border-2 border-white rounded-[30px]">
                    CONTACT
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
