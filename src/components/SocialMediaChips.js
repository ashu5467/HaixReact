// SocialMediaChips.js

import React from "react";
import Badge from "react-bootstrap/Badge";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaSnapchat, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const SocialMediaChips = ({ selectedCompany }) => {
  const badgeStyle = {
    fontSize: "1.2rem",
    backgroundColor: "#008000",
    color: "#fff",
    borderRadius: "8px",
    margin: '0 4px',
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
  };

  const socialMediaIcons = {
    Facebook: <FaFacebook />,
    Twitter: <FaTwitter />,
    Instagram: <FaInstagram />,
    LinkedIn: <FaLinkedin />,
    YouTube: <FaYoutube />,
    Pinterest: <FaPinterest />,
    Snapchat: <FaSnapchat />,
    TikTok: <FaTiktok />,
    WhatsApp: <FaWhatsapp />,
  };

  const socialMediaNames = [
    "Facebook",
    "Twitter",
    "Instagram",
    "LinkedIn",
    "YouTube",
    "Pinterest",
    "Snapchat",
    "TikTok",
    "WhatsApp",
  ];

  return (
    <div style={styles.container}>
      {socialMediaNames.map((socialMedia, index) => (
        <Badge
          key={index}
          variant="secondary"
          style={badgeStyle}
          onClick={() => console.log(selectedCompany)}
        >
          {socialMediaIcons[socialMedia]}
          <span style={{ marginLeft: '8px' }}>{socialMedia}</span>
        </Badge>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
};

export default SocialMediaChips;
