import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar position="static" sx={{ height: 64 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My tech demo (Data visualization)
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home Page
        </Button>

        <Button color="inherit" component={Link} to="/LineChart">
          Line Chart
        </Button>
        <Button color="inherit" component={Link} to="/ScatterChart">
          Scatter Chart
        </Button>
        <Button color="inherit" component={Link} to="/PieAndBarChart">
          Pie and Bar chart
        </Button>
        <Button color="inherit" component={Link} to="/MapChart">
          Map
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
