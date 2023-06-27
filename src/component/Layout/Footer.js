import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ paddingTop: "10px", position: "fixed", bottom: 0, width: "100%", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <Typography variant="body2" color="text.secondary" align="center">
        This application was built with love by
        <a
          href="https://github.com/WenhuiXu1/Japanese-Quiz-App-Back-End"
          style={{ margin: "0 5px 0 5px" }}
        >
          Wenhui (Vanessa)
        </a>
        using
        <a href="https://reactjs.org/" style={{ margin: "0 5px 0 5px" }}>
          React
        </a>
        and styled with
        <a href="https://mui.com/" style={{ margin: "0 5px 0 5px" }}>
          Material-UI (MUI)
        </a>
        . I hope you enjoy learning some Japanese characters!
      </Typography>
    </footer>
  );
};

export default Footer;
