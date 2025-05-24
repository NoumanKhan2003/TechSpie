import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiLink } from "react-icons/hi2";

const SocialIcon = ({ platform }) => {
  switch (platform) {
    case "linkedin":
      return <FaLinkedinIn />;
    case "twitter":
      return <FaXTwitter />;
    case "github":
      return <FaGithub />;
    default:
      return <HiLink />;
  }
};

export default SocialIcon;
