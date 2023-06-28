import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5px",
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        This application was built with love by
        <a
          href="https://github.com/WenhuiXu1/Japanese-Quiz-App-Back-End"
          style={{ margin: "0 10px 0 10px" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wenhui (Vanessa)
        </a>
        Enjoy learning!
      </Typography>
    </footer>
  );
};

export default Footer;
