import React from "react";
import { Spacer, Wrapper, Divider, Interdiv } from "../styles/compStyle";
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

function createData(Nom, Type, domaine, nbr_abonnement, date_abonnement) {
  return { Nom, Type, domaine, nbr_abonnement, date_abonnement };
}

var rows = [
  createData("Une entreprise", "son type ", "son domaine", 10, "une date"),
];
function Company() {
  return (
    <div>
      <Wrapper>
        <Divider>
          <H5>Entreprise</H5>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nom</TableCell>
                  <TableCell align="right">Type</TableCell>
                  <TableCell align="right">domaine</TableCell>
                  <TableCell align="right">nombre d'abonnement</TableCell>
                  <TableCell align="right">date début/fin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.Nom}>
                    <TableCell component="th" scope="row">
                      {row.Nom}
                    </TableCell>
                    <TableCell align="right">{row.Type}</TableCell>
                    <TableCell align="right">{row.domaine}</TableCell>
                    <TableCell align="right">{row.nbr_abonnement}</TableCell>
                    <TableCell align="right">{row.date_abonnement}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Divider>
        <Interdiv></Interdiv>
        <Interdiv>
          <H5>Ajouter une entreprise</H5>
        </Interdiv>
        <InputCompany></InputCompany>
        <Spacer></Spacer>
        <BillingCompany></BillingCompany>
        <Spacer></Spacer>
        <ContactCompany></ContactCompany>
        <Interdiv></Interdiv>
      </Wrapper>
    </div>
  );
}
export default Company;
