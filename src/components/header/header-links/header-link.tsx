import { HeaderLinkType } from "@/types/component";
import Link from "next/link";
import React from "react";

const HeaderLink = ({ headerLink }: { headerLink: HeaderLinkType }) => {
  if (headerLink.soon) {
    return <></>;
  }

  return (
    <Link
      href={headerLink.route}
      className="text-foreground-header cursor-pointer font-[600]"
    >
      {headerLink.label}
    </Link>
  );
};

export default HeaderLink;
