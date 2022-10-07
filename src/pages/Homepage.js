import { useContext, useState } from "react";
// importing material ui components
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TodoContext from "../context/TodoContext";

// importing components
import TaskHolder from "../components/TaskHolder";

const Homepage = () => {
  // storing global tasks state
  const { tasks, createTasks } = useContext(TodoContext);

  // creating local state
  const [input, setInput] = useState(""); // for storing the task input

  // function for creating task
  const createTask = () =>{
    createTasks(input)
    setInput('') // clearing the input
  }

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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            sx={{ outlined: "none" }}
            id="outlined-basic"
            label="Add Task"
            variant="outlined"
          />
          {/* button for triggering the create task action */}
          <Button
            onClick={() => createTask()}
            sx={{ outlined: "none", borderRadius: "0.5rem" }}
            variant="contained"
            disableElevation
          >
            Add
          </Button>
        </Box>
      </Paper>

      {/* for showing the created task */}
      <Paper sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
        padding: '0.5rem'
      }}
      disableElevation 
      >
        <Box sx={{
          maxWidth: '700px'
        }} disableElevation>
      {tasks.map((element) => {
        return <TaskHolder key={element.id} task={element.task} />;
      })}
      </Box>
      </Paper>
    </>
  );
};

export default Homepage;
