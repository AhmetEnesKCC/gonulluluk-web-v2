import React from "react";
import Logo from "./logo";
import Joinbutton from "./join-button";
import HeaderLinks from "./header-links";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white z-[999] px-page-padding py-4 grid grid-cols-[auto,1fr,auto] items-center border-b-divider border-b-[1px]">
      <Logo />
      <HeaderLinks />
      <Joinbutton />
    </header>
  );
};

export default Header;
