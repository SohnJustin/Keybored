import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            KEYBOARDS
          </Link>
          <Link className="navbar__link relative" href="#">
            KEYCAPS
          </Link>
          <Link className="navbar__link relative" href="#">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
