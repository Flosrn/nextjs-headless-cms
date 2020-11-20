import React from "react";
import Links from "components/ui/links";
import Logo from "components/ui/logo";
import HamburgerMenu from "components/ui/hamburger-menu";

interface HeaderProps {
  openHandler: () => void;
  side: boolean;
}

const Header: React.FC<HeaderProps> = ({ openHandler, side }) => {
  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        className={`relative flex items-center justify-between sm:h-10 ${
          side ? "lg:justify-start" : ""
        }`}
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Logo />
            <HamburgerMenu openHandler={openHandler} />
          </div>
        </div>
        <Links />
      </nav>
    </div>
  );
};
export default Header;
