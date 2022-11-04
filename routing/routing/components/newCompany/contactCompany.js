import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Input, SelectInput } from "../Inputs";
import { H5 } from "../textStyles/style";

const Card = styled.div`
  padding: 1vw;
  border-radius: 30px;
  background-color: #fff;
  margin-left: 5vw;
  margin-right: 5vw;
`;
const InterdivSmall = styled.div`
  width: 20vw;
  display: inline-block;
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
const ContactCompany = () => {
  /*declaration variable*/

  const [civility, setCivility] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telfixe, setTelFixe] = useState("");
  const [telMobile, setTelMobile] = useState("");

  /*multiple variable selected*/

  /*type contract*/

  const typeContrat = [
    { label: "Gestionnaire", value: "Gestionnaire" },
    { label: "Facturation", value: "Facturation" },
    { label: "Mgt", value: "Mgt" },
    { label: "autre", value: "autre" },
  ];
  const [selectedTypeContrat, setSelectedTypeContrat] = useState("");

  /*type fonction*/

  const Fonction = [
    { label: "RH Finance", value: "RH Finance" },
    { label: "Direction", value: "Direction" },
    { label: "Cse", value: "Cse" },
    { label: "Production", value: "Production" },
    { label: "Commerce/marketing", value: "Commerce/marketing" },
    { label: "Logistique", value: "Logistique" },
    { label: "R&D", value: "R&D" },
  ];
  const [selectedFonction, setSelectedFonction] = useState("");

  return (
    <Card>
      <InterdivSmall>
        <H5>Information contact</H5>
        <Input
          placeholder="Civilité"
          value={civility}
          onChange={(e) => setCivility(e.target.value)}
        />
      </InterdivSmall>
      <InterdivSmall>
        <Input
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </InterdivSmall>
      <InterdivSmall>
        <Input
          placeholder="Prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </InterdivSmall>
      <Interdiv></Interdiv>
      <InterdivSmall>
        <Input
          placeholder="Telephone fixe"
          value={telfixe}
          onChange={(e) => setTelFixe(e.target.value)}
        />
      </InterdivSmall>

      <InterdivSmall>
        <Input
          placeholder="Telephone mobile"
          value={telMobile}
          onChange={(e) => setTelMobile(e.target.value)}
        />
      </InterdivSmall>
      <InterdivSmall>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InterdivSmall>
      <Interdiv></Interdiv>
      <Interdivalign>
        <SelectInput
          values={typeContrat}
          value={selectedTypeContrat}
          onChange={(e) => setSelectedTypeContrat(e.target.value)}
          placeholder="Type de contrat"
        ></SelectInput>
      </Interdivalign>

      <Interdivalign>
        <SelectInput
          values={Fonction}
          value={selectedFonction}
          onChange={(e) => setSelectedFonction(e.target.value)}
          placeholder="Fonction"
        ></SelectInput>
      </Interdivalign>
    </Card>
  );
};

export default ContactCompany;
