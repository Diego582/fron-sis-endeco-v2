import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Reports = () => {
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
          Reports
        </Typography>
      </Box>
    </>
  );
};

export default Reports;
