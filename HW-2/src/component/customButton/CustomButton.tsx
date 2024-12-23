import Button from "@mui/material/Button";
import { CustomButtonProps } from "@todo/types";
import React from "react";

const CustomButton: React.FC<CustomButtonProps> = ({
  color,
  value,
  variant,
  onClick = () => {},
  fullWidth = false,
}) => {
  return (
    <Button
      type="submit"
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {value}
    </Button>
  );
};

export default CustomButton;
