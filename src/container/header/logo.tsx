import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        alt="kulup logo"
        src={"/assets/images/logo.svg"}
        width={160}
        height={90}
      />
    </Link>
  );
};

export default Logo;
