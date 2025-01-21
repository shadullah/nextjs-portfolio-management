import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <div className="flex justify-between items-center ">
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
        <div>
          <ul className="flex items-center space-x-6 font-rubik">
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
                <button>CONTACT</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
