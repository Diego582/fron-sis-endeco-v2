import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function ListNav({ itemsMenu }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        maxHeight: "70vh",
      }}
    >
      {itemsMenu &&
        itemsMenu.map((item, index) => {
          return (
            <Paper
              sx={{
                m: 1,
                width: 300,
                height: 400,
              }}
              elevation={5}
              key={index}
            >
              <Card>
                <CardMedia
                  image={item.imagen}
                  sx={{ height: 140 }}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.titulo}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="div">
                    {item.descripcion}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Tooltip title="Agrega a Favoritos">
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Ingresar">
                    <Link to={item.ruta}>
                      <IconButton aria-label="share">
                        <DoubleArrowIcon />
                      </IconButton>
                    </Link>
                  </Tooltip>
                </CardActions>
              </Card>
            </Paper>
          );
        })}
    </Box>
  );
}
