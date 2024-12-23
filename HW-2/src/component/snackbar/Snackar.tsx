import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { SnackbarProps } from "@todo/types";

const CustomSnackbar: React.FC<SnackbarProps> = ({
  message,
  severity,
  open,
  onClose,
}) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={onClose}
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
  >
    <Alert onClose={onClose} severity={severity}>
      {message}
    </Alert>
  </Snackbar>
);

export default CustomSnackbar;
