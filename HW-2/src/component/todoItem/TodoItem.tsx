import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";
import { EventTypeValues, TodoObject } from "@todo/types";

interface TodoItemProps extends TodoObject {
  handleEvent: (eventType: EventTypeValues, id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  completed,
  id,
  title,
  isUrgent,
  handleEvent,
}) => {
  return (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          edge="end"
          color="error"
          onClick={() => handleEvent("delete", id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Tooltip title={isUrgent ? "Unmark as urgent" : "Mark as urgent"} arrow>
        <IconButton
          onClick={() => handleEvent("toggle urgent", id)}
          color="success"
        >
          {isUrgent ? (
            <CheckCircleIcon />
          ) : (
            <RadioButtonUncheckedIcon sx={{ color: "green" }} />
          )}
        </IconButton>
      </Tooltip>
      <ListItemText
        onClick={() => handleEvent("toggle complete", id)}
        primary={
          <Typography
            variant="body1"
            sx={{
              textDecoration: completed ? "line-through" : "none",
              color: isUrgent ? "red" : "inherit",
              cursor: "pointer",
            }}
          >
            {title}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default TodoItem;
