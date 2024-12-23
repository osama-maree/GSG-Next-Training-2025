import List from "@mui/material/List";
import TodoItem from "@todo/component/todoItem";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { EventTypeValues, TodoObject } from "@todo/types";

interface AllTodosProps {
  todos: TodoObject[];
  handleEvent: (eventType: EventTypeValues,id: number) => void;
}

const CurrentTodos: React.FC<AllTodosProps> = ({
  todos,
  handleEvent,
}) => {
  return (
    <>
      {!todos.length ? (
        <Typography color="text.secondary">
          {" "}
          There is no todo to show...
        </Typography>
      ) : (
        <Paper>
          <List>
            {todos.map((todo) => (
              <TodoItem
              key={todo.id}
                {...todo}
                handleEvent={handleEvent}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  );
};

export default CurrentTodos;
