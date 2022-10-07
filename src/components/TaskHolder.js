import Box from "@mui/material/Box";

const TaskHolder = (props) => {
  return (
    <Box sx={{}}>
      <p>{props.task}</p>
    </Box>
  );
};

export default TaskHolder;
