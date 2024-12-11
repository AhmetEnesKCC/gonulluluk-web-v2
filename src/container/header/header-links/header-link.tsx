"use client";

import { HeaderLinkType } from "@/types/component";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderLink = ({ headerLink }: { headerLink: HeaderLinkType }) => {
  const pathname = usePathname();

  if (headerLink.soon) {
    return <></>;
  }

  return (
    <Link
      href={headerLink.route}
      className={clsx(
        "text-foreground-header cursor-pointer font-[600]",
        headerLink.route === pathname && "text-secondary"
      )}
    >
      {headerLink.label}
    </Link>
  );
};

export default HeaderLink;
