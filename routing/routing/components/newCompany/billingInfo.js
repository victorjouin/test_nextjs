import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Input } from "../Inputs";
import { H5 } from "../textStyles/style";

const Card = styled.div`
  padding: 1vw;
  border-radius: 30px;
  background-color: #fff;
  margin-left: 5vw;
  margin-right: 5vw;
`;
const Interdiv = styled.div`
  width: 30vw;
  margin-top: 2vw;
  margin-left: 5vw;
  margin-bottom: 2vw;
`;

const Interdivalign = styled.div`
  width: 30vw;
  display: inline-block;
  margin-right: 10vw;
`;
const BillingCompany = () => {
  const [adresseBill, setAdresseBill] = useState("");
  const [numTVA, setNumTVA] = useState("");
  const [conditionpaiment, setConditionpaiment] = useState("");

  return (
    <Card>
      <Interdivalign>
        <H5>Information de facturation</H5>
        <Input
          placeholder="Adresse de facturation"
          value={adresseBill}
          onChange={(e) => setAdresseBill(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="n° TVA intracommunautaire"
          value={numTVA}
          onChange={(e) => setNumTVA(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="Condition de paiment"
          value={conditionpaiment}
          onChange={(e) => setConditionpaiment(e.target.value)}
        />
      </Interdivalign>
    </Card>
  );
};

export default BillingCompany;
