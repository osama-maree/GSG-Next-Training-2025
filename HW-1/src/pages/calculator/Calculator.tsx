import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import classes from "./calculator.module.css";
import CustomButton from "../../component/button";
import { CALCULATOR_VALUEA } from "../../constant";

const App: React.FC = () => {
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
            {"0"}
          </Typography>
          <Typography variant="h4" color="primary" fontWeight="bold">
            {""}
          </Typography>
        </Stack>

        <Grid container spacing={1}>
          {CALCULATOR_VALUEA.map((value) => (
            <CustomButton value={value} />
          ))}
          <CustomButton value="C" color="error" />
        </Grid>
      </Paper>
    </Box>
  );
};

export default App;
