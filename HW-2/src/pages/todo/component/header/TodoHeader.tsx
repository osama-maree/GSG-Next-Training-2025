import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { format } from "date-fns";

const TodoHeader = () => {
  const currentDate = new Date();
  return (
    <Box
      sx={{
        textAlign: "start",
        my: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mr={1}>
        {format(currentDate, "EEEE")},
      </Typography>
      <Typography component="p" color="text.secondary" mt={1}>
        {format(currentDate, "dd MMM")}
      </Typography>
    </Box>
  );
};

export default TodoHeader;
