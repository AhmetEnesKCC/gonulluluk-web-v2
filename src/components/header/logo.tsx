import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt="kulup logo"
      src={"/assets/images/logo.svg"}
      width={160}
      height={90}
    />
  );
};

export default Logo;
