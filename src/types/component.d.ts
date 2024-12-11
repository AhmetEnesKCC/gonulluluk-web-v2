export type HeaderLinkType = {
  label: string;
  route: string;
  soon?: boolean;
};

export type FooterLinkType = {
  type: "link" | "mail";
  link: string;
  icon: React.JSX.Element;
  protocol?: "https://" | "http://";
};

export type HomeStatType = {
  label: string;
  stat: number;
  more?: boolean;
  imageSrc: string;
};
