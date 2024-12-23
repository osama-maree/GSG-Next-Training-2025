import Box from "@mui/material/Box";
import CustomButton from "../customButton";
import { EventTypeValues, TodoObject } from "@todo/types";

interface TodoDetailsProps {
  todos: TodoObject[];
  handleEvent: (eventType: EventTypeValues) => void;
}

const TodoDataComponent: React.FC<TodoDetailsProps> = ({
  todos,
  handleEvent,
}) => {
  const createdCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const urgentCount = todos.filter((todo) => todo.isUrgent).length;

  const todoDetails = [
    { count: `All: ${createdCount}`, eventType: "all" },
    { count: `Completed: ${completedCount}`, eventType: "complete" },
    { count: `urgent: ${urgentCount}`, eventType: "urgent" },
  ] as const;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
      {todoDetails.map(({ count, eventType }) => (
        <CustomButton
          value={count}
          variant="outlined"
          color="success"
          onClick={() => handleEvent(eventType)}
          key={count}
        />
      ))}
    </Box>
  );
};

export default TodoDataComponent;
