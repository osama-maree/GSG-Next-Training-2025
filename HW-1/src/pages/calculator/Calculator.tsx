import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import classes from "./calculator.module.css";
import CustomButton from "../../component/button";
import { CALCULATOR_VALUES } from "../../constant";
import { CalcaulatorValue } from "../../types";
import { calculate } from "../../utils";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number>();

  const handleClick = (value: CalcaulatorValue) => {
    switch (value) {
      case "=":
        setResult(calculate(input));
        setInput("");
        break;
      case "X":
        setInput(input.slice(0, -1));
        break;
      case "XX":
        input.length > 1 && setInput(input.slice(0, -2));
        break;
      case "C":
        setInput("");
        setResult(undefined);
        break;
      default:
        setInput((prev) => prev + value);
        break;
    }
  };

  return (
    <Box className={classes.container}>
      <Paper
        elevation={3}
        sx={{
          width: 400,
          padding: 2,
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <Stack
          mb={2}
          p={2}
          display="flex"
          alignItems="flex-end"
          sx={{ backgroundColor: "#f0f4f8", borderRadius: 1 }}
        >
          <Typography variant="h5" color="textSecondary">
            {input || "0"}
          </Typography>
          <Typography variant="h4" color="warning" fontWeight="bold">
            {result}
          </Typography>
        </Stack>

        <Grid container spacing={1}>
          {CALCULATOR_VALUES.map((value) => (
            <CustomButton value={value} handleClick={handleClick} key={value} />
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Calculator;
