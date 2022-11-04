import React from "react";
import styled from "styled-components";
import { H5 } from "../components/textStyles/style";
import InputCompany from "../components/newCompany/inputCompany";
import BillingCompany from "../components/newCompany/billingInfo";
import ContactCompany from "../components/newCompany/contactCompany";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Input } from "@mui/material";
let Height = "calc(100vh - clamp(54px, 8vw, 84px) - 62px)";

const Wrapper = styled.div`
  width: 20vw;
  margin: auto;
  min-height: ${Height};
  margin-left: 50px;
  margin-right: 5vw;
  z-index: 1;
`;
function About() {
  return (
    <Wrapper>
      <h1>About Page</h1>
      <Input></Input>
    </Wrapper>
  );
}
export default About;
