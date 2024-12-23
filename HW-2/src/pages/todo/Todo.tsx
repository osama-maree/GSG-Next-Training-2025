import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormComponent from "@todo/component/form";
import TodoDetails from "@todo/component/detail";
import TodoHeader from "./component/header";
import CurrentTodos from "@todo/component/currentTodos";
import { EventTypeValues, TodoObject } from "@todo/types";
import "./todo.css";
import { EVENT_TYPES } from "@todo/constant";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoObject[]>([]);
  const [choosenTodos, setChoosenTodos] = useState<TodoObject[]>([]);

  const addTodo = (title: string, isUrgent: boolean) => {
    const newTodo = {
      id: Date.now(),
      title,
      isUrgent,
      completed: false,
    };
    setChoosenTodos([...choosenTodos, newTodo]);
    setTodos([...todos, newTodo]);
  };

  const handleEvents = (eventType: EventTypeValues, id?: number) => {
    switch (eventType) {
      case EVENT_TYPES.COMPLETE:
        setChoosenTodos(todos.filter((todo) => todo.completed));
        break;
      case EVENT_TYPES.URGENT:
        setChoosenTodos(todos.filter((todo) => todo.isUrgent));
        break;
      case EVENT_TYPES.ALL:
        setChoosenTodos(todos);
        break;
      case EVENT_TYPES.TOGGLE_COMPLETE:
        setChoosenTodos(
          choosenTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
        break;
      case EVENT_TYPES.DELETE:
        setChoosenTodos(choosenTodos.filter((todo) => todo.id !== id));
        setTodos(todos.filter((todo) => todo.id !== id));
        break;
      case EVENT_TYPES.TOGGLE_URGENT:
        setChoosenTodos(
          choosenTodos.map((todo) =>
            todo.id === id ? { ...todo, isUrgent: !todo.isUrgent } : todo
          )
        );
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isUrgent: !todo.isUrgent } : todo
          )
        );
        break;
      default:
    }
  };

  return (
    <Box className="container">
      <Paper
        elevation={3}
        sx={{
          width: 400,
          padding: 2,
          borderRadius: 2,
        }}
      >
        <TodoHeader />
        <FormComponent addTodo={addTodo} />
        <TodoDetails todos={todos} handleEvent={handleEvents} />
        <CurrentTodos
          todos={choosenTodos}
          handleEvent={handleEvents}
        />
      </Paper>
    </Box>
  );
};

export default Todo;
