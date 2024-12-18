import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";
import { CustomButtonProps } from "../../types";

const CustomButton: React.FC<CustomButtonProps> = ({ value, color }) => {
  return (
    <Grid item xs={value === "=" || color ? 12 : 4} key={value}>
      <Button
        variant="contained"
        color={color ?? (value === "=" ? "success" : "primary")}
        fullWidth
        sx={{ padding: 2, fontSize: "1.2rem" }}
        onClick={() => {}}
      >
        {value}
      </Button>
    </Grid>
  );
};

export default CustomButton;
