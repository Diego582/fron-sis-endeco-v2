import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Credits = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: 2,
          mb: 2,
          alignItems: "center",
        }}
      >
        <Typography variant="h3" color="initial">
          Creditos
        </Typography>
      </Box>
    </>
  );
};

export default Credits;
