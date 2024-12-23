import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CustomSnackbar from "@todo/component/snackbar";
import CustomButton from "@todo/component/customButton";
import { SnackbarProps } from "@todo/types";

interface FormProps {
  addTodo: (title: string, urgent: boolean) => void;
}

const FormComponent: React.FC<FormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [urgent, setUrgent] = useState(false);
  const [snackbarDetails, setSnackbarDetails] = useState<SnackbarProps>();

  const onClose = () => {
    setSnackbarDetails({ ...snackbarDetails, open: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") {
      setSnackbarDetails({
        message: "Title can't be empty!",
        open: true,
        severity: "error",
      });

      return;
    }
    addTodo(title, urgent);
    setSnackbarDetails({
      message: "Todo added successfully",
      open: true,
      severity: "success",
    });
    setTitle("");
    setUrgent(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="Type todo here..."
        variant="outlined"
        sx={{
          mb: 1,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "green",
            },
            "&:hover fieldset": {
              borderColor: "darkgreen",
            },
            "&.Mui-focused fieldset": {
              borderColor: "green",
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "green",
          },
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip
                title={urgent ? "Unmark as urgent" : "Mark as urgent"}
                arrow
              >
                <IconButton
                  onClick={() => setUrgent((prev) => !prev)}
                  color={urgent ? "success" : "default"}
                >
                  {urgent ? (
                    <CheckCircleIcon />
                  ) : (
                    <RadioButtonUncheckedIcon sx={{ color: "green" }} />
                  )}
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />

      <CustomButton
        color="success"
        value="Add Todo"
        variant="contained"
        fullWidth={true}
      />
      <CustomSnackbar {...snackbarDetails} onClose={onClose} />
    </Box>
  );
};

export default FormComponent;
