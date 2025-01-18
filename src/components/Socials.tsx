import {
  FaGithub,
  FaLinkedin,
  //   FaTwitter,
  FaStackOverflow,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiNotion, SiX, SiInstagram } from "react-icons/si";
// import { HiDocumentText } from "react-icons/hi";
// import {JSX} from "react"

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/yourusername",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/yourusername",
    icon: <SiX />,
  },
  {
    name: "instagram",
    link: "https://yourwebsite.com/yourcv.pdf",
    icon: <SiInstagram />,
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/youruserid/yourusername",
    icon: <FaStackOverflow />,
  },
  {
    name: "Figma",
    link: "https://figma.com/@yourusername",
    icon: <FiFigma />,
  },
  {
    name: "Notion",
    link: "https://notion.so/yourusername",
    icon: <SiNotion />,
  },
];
type HeaderSocials = {
  className?: string;
};
export const HeaderSocials = ({ className }: HeaderSocials) => {
  return (
    <div className={`flex gap-3 ${className}`}>
      {socials.map((social, index) => (
        <div key={index}>{social.icon}</div>
      ))}
    </div>
  );
};

export const FooterSocials = () => {
  return <div></div>;
};
