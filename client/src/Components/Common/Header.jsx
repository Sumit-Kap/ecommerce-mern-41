import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@mui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Sign up",
    path: "/signUp",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];
export const Header = () => {
  return (
    <Box xs={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h3" component="div" xs={{ flexgrow: 1 }}>
            Ecommerce App
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {Routes.map((route, item) => {
              return (
                <Button key={item} sx={{ color: "#fff" }}>
                  <Link to={route.path}>{route.name}</Link>
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
