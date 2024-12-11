import { FooterLinkType } from "@/types/component";
import { MdEmail } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { FaYoutube, FaInstagram, FaXTwitter } from "react-icons/fa6";

export const footerLinks: FooterLinkType[] = [
  {
    icon: <MdEmail />,
    link: "itu.gonullu.iletisim@gmail.com",
    type: "mail",
  },
  {
    icon: <GrFacebookOption />,
    protocol: "https://",
    link: "facebook.com/GonullulukKulubu",
    type: "link",
  },
  {
    icon: <FaYoutube />,
    link: "youtube.com/@itugonulluluk",
    type: "link",
    protocol: "https://",
  },
  {
    icon: <FaInstagram />,
    link: "instagram.com/itugonulluluk",
    type: "link",
    protocol: "https://",
  },
  {
    icon: <FaXTwitter />,
    link: "twitter.com/ITUGonulluluk",
    type: "link",
    protocol: "https://",
  },
];
