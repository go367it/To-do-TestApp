import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // for storing tasks
  const [tasks, setTasks] = useState([]);

  const createTasks = (input) => {
    const jsonData = {
      task: input,
      id: new Date().getTime().toString(),
    };
    setTasks([...tasks,
      jsonData,])
  };

  return <TodoContext.Provider value={{tasks, createTasks}}>{children}</TodoContext.Provider>;
};

export default TodoContext;
