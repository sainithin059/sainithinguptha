"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/sainithin059' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/sai-nithin-2aa527273/' }
];

const Socials = ({ containerStyles, iconStyles, playClickSound }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} target="_blank" rel="noopener noreferrer">
            <span className={iconStyles} onClick={playClickSound}>
              {item.icon}
            </span>
          </Link>
        );
      })}
    </div>
  );
};


export default Socials;
