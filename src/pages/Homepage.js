// importing material ui components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Homepage = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      elevation={0}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <TextField
          sx={{ outlined: "none" }}
          id="outlined-basic"
          label="Add Task"
          variant="outlined"
        />

        <Button sx={{ outlined: "none" }} variant="contained" disableElevation>
          Add
        </Button>
      </Box>
    </Paper>
  );
};

export default Homepage;
