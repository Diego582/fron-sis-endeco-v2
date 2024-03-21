import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import React from "react";
import CalculateIcon from "@mui/icons-material/Calculate";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupIcon from "@mui/icons-material/Group";
import FeedIcon from "@mui/icons-material/Feed";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Link } from "react-router-dom";

export default function MenuBar() {
  const categories = [
    "Mesa de Entradas",
    "Contaduria",
    "Tesoreria",
    "Creditos",
    "Reportes",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "90vh",
        width: "5vw",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <List >
        {categories.map((text, index) => (
          <ListItem key={index} disablePadding>
            <Link
              to={text.toLowerCase().replace(/ /g, "")}
              style={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <Tooltip title={text}>
                  <ListItemIcon sx={{ pt: 2, pb: 2 }}>
                    {text === "Mesa de Entradas" ? (
                      <LibraryBooksIcon sx={{ color: "white" }} />
                    ) : text === "Contaduria" ? (
                      <CalculateIcon sx={{ color: "white" }} />
                    ) : text === "Tesoreria" ? (
                      <AccountBalanceIcon sx={{ color: "white" }} />
                    ) : text === "Creditos" ? (
                      <CurrencyExchangeIcon sx={{ color: "white" }} />
                    ) : (
                      <FeedIcon sx={{ color: "white" }} />
                    )}
                  </ListItemIcon>
                </Tooltip>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem>
          <ListItemIcon sx={{ pt: 2, pb: 2 }}>
            <Tooltip title="Salir">
              <ExitToAppIcon sx={{ color: "white" }} />
            </Tooltip>
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}
