import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};
export default LayOut;
