import { FooterLinkType } from "@/types/component";
import React from "react";

const FooterLink = (props: FooterLinkType) => {
  return (
    <a
      href={
        props.type === "link"
          ? props.protocol + props.link
          : "mailto:" + props.link
      }
      className="grid grid-cols-[48px,1fr] gap-x-[12px] mt-3"
    >
      <div>
        {React.cloneElement(props.icon, {
          size: 32,
        })}
      </div>
      <p>{props.link}</p>
    </a>
  );
};

export default FooterLink;
