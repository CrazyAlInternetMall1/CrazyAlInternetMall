import Button from 'react-bootstrap/Button';
import Stack from "@mui/material/Stack";
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from "react";

const PriceBtn = () => {

  return (
    <>
      <div className="pb-container">
        <Stack spacing={2} direction="row" className="pbs-container">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse>
            <Button variant="outlined">Under 5$</Button>
            <Button variant="outlined">Under 10$</Button>
            <Button variant="outlined">Under 25$</Button>
            <Button variant="outlined">Under 50$</Button>
            <Button variant="outlined">Under 100$</Button>
          </Navbar.Collapse>
          <div className="vl"></div>
          <DropdownButton variant="outlined" title="Categories"></DropdownButton>
          <DropdownButton variant="outlined" title="#Tags"></DropdownButton>
        </Stack>
      </div>
    </>
  );
};

export default PriceBtn;
