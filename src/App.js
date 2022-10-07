import "./styles.css";
import Homepage from "./pages/Homepage";
import { TodoProvider } from "./context/TodoContext";

export default function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Homepage />
      </TodoProvider>
    </div>
  );
}
