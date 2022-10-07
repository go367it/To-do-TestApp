import Box from "@mui/material/Box";

const TaskHolder = (props) => {
  return (
    <Box sx={{
      padding: '0 0.5rem 0 0.5rem',
      border: '1px solid gray',
      borderRadius: '0.8rem',
      marginTop: '0.5rem',
      textAlign: 'left',
      width: '100%'
    }}>
      <p>{props.task}</p>
    </Box>
  );
};

export default TaskHolder;
