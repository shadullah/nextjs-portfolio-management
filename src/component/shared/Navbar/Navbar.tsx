"use client";
import { useAuth } from "@/context/Authcontext";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <div className="max-w-6xl mx-auto mt-3 md:mt-12">
      <div className="flex justify-between items-center py-6 md:py-0 px-4 md:px-0">
        <Link href="/">
          <div>
            <Image height={22} width={125} src="/logoM.png" alt="logo"></Image>
          </div>
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-16 font-rubik">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/work">OUR WORKS</Link>
            </li>
            {currentUser && (
              <li>
                <Link href="/dashboard">DASHBOARD</Link>
              </li>
            )}
            {currentUser ? (
              <li>
                <button onClick={handleLogout}>LOGOUT</button>
              </li>
            ) : (
              <li>
                <Link href="/login">LOGIN</Link>
              </li>
            )}
            <li>
              <Link href="/contact">
                <button className="h-[47px] w-[138px] border-2 border-green-600 hover:bg-green-600 rounded-[30px]">
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
                <Link href="/about">OUR ABOUT</Link>
              </li>
              <li>
                <Link href="/work">OUR WORKS</Link>
              </li>
              {currentUser && (
                <li>
                  <Link href="/dashboard">DASHBOARD</Link>
                </li>
              )}
              {currentUser ? (
                <li>
                  <button onClick={handleLogout}>LOGOUT</button>
                </li>
              ) : (
                <li>
                  <Link href="/login">LOGIN</Link>
                </li>
              )}
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
