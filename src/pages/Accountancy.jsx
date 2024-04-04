import Typography from "@mui/material/Typography";
import ListNav from "../components/ListNav";
import { Box, Button, TextField } from "@mui/material";

const Accountancy = () => {
  const itemsMenu = [
    {
      _id: "2",
      titulo: "Reservas Internas",
      descripcion:
        " En esta Opcion podran Gestionar todo lo referido al Reservas Internas , crear y realizar diversas consultas",
      ruta: "reservasinternas",
      imagen: "reservasinternas.jpg",
      menu: "contaduria",
    },
    {
      _id: "3",
      titulo: "Ordenes de Pago",
      descripcion:
        " En esta Opcion podran Gestionar todo lo Ordenes de Pago , crear y realizar diversas consultas",
      ruta: "/contaduria/ordenesdepagos",
      imagen: "ordenesdepagos.jpg",
      menu: "contaduria",
    },

    {
      _id: "5",
      titulo: "Partidas Contables",
      descripcion:
        " En esta Opcion podran Gestionar todo lo referido al Partidas Contables , crear y realizar diversas consultas",
      ruta: "/contaduria/partidas",
      imagen: "partidascontables.jpg",
      menu: "contaduria",
    },
  ];

  const handleOpenCloseCreate = () => {};
  const handleFilter = () => {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
        height: "90vh",
        pl: 1,
        pr: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mt: 1,
          mb: 1,
        }}
      >
        <Typography variant="h4"> Contaduria</Typography>
      </Box>
      <Box sx={{ mt: 1, mb: 1 }}>
        <TextField
          id="filled-search"
          label="Buscar Menu"
          type="search"
          variant="filled"
          name="descripcion"
          onKeyUp={handleFilter}
          fullWidth
        />
      </Box>
      <ListNav itemsMenu={itemsMenu} />
    </Box>
  );
};

export default Accountancy;
