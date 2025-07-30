import logo from "./logo.svg";
import "./App.css";
import Material from "./Material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, purple, green } from "@mui/material/colors";
import Container from "@mui/material/Container";
import GrideTest from "./GrideTest";
import StackTest from "./StackTest";

const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Material /> 
       
      </div>
    </ThemeProvider>
  );
}

export default App;
