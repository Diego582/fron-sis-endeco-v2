import Typography from "@mui/material/Typography";
import ListNav from "../components/ListNav";
import { Box, Button, TextField } from "@mui/material";

const Income = () => {
  const itemsMenu = [
    {
      titulo: "Expedientes",
      descripcion:
        " En esta Opcion podran Gestionar todo lo referido al Expedientes , crear y realizar diversas consultas",
      ruta: "/expedientes",
      imagen: "expedientes.jpg",
      menu: "registros",
    },
    {
      titulo: "Notas Enviadas",
      descripcion:
        " En esta Opcion podran Gestionar todo lo referido al Notas Enviadas , crear y realizar diversas consultas",
      ruta: "/notasenviadas",
      imagen: "notaenviada.jpg",
      menu: "registros",
    },
    {
      titulo: "Notas Recibidas",
      descripcion:
        " En esta Opcion podran Gestionar todo lo referido al Notas Recibidas , crear y realizar diversas consultas",
      ruta: "/notasrecibidas",
      imagen: "notarecibida.jpg",
      menu: "registros",
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
        <Typography variant="h4"> Mesa de Entradas</Typography>
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

export default Income;
