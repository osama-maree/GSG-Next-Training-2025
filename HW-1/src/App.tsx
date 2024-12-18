import Box from "@mui/material/Box";
import { lazy, Suspense } from "react";
const Calculater = lazy(() => import("./pages/calculator"));

function App() {
  return (
    <Suspense fallback={<Box>Loading...</Box>}>
      <Calculater />
    </Suspense>
  );
}

export default App;
