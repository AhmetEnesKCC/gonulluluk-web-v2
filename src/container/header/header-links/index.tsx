import { headerLinks } from "@/data/header-links";
import React from "react";
import HeaderLink from "./header-link";

const HeaderLinks = () => {
  return (
    <div className="flex items-center justify-center gap-x-12">
      {headerLinks.map((headerLink) => (
        <HeaderLink key={headerLink.label} headerLink={headerLink} />
      ))}
    </div>
  );
};

export default HeaderLinks;
