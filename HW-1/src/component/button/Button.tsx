import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import { CustomButtonProps } from "../../types";

const CustomButton: React.FC<CustomButtonProps> = ({ value, handleClick }) => {
  return (
    <Grid item xs={value === "=" || value == "C" ? 12 : 4}>
      <Button
        variant="contained"
        color={
          value === "C"
            ? "error"
            : value === "XX"
            ? "primary"
            : value === "="
            ? "success"
            : "info"
        }
        fullWidth
        sx={{ padding: 2, fontSize: "1.2rem" }}
        onClick={() => handleClick(value)}
      >
        {value}
      </Button>
    </Grid>
  );
};

export default CustomButton;
