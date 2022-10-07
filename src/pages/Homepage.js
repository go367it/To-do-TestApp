// importing material ui components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Homepage = () => {
  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
        elevation={0}
      >
        {/* taking input section  */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            border: "1px solid gray",
            borderRadius: "15px",
            padding: "0.8rem",
          }}
        >
          {/* input filed for entering the task  */}
          <TextField
            sx={{ outlined: "none" }}
            id="outlined-basic"
            label="Add Task"
            variant="outlined"
          />
          {/* button for triggering the create task action */}
          <Button
            sx={{ outlined: "none", borderRadius: "0.5rem" }}
            variant="contained"
            disableElevation
          >
            Add
          </Button>
        </Box>
      </Paper>
    </>
  );
};

export default Homepage;
