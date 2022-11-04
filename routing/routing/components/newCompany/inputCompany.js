import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Input, SelectInput } from "../Inputs";
import MultipleSelect from "../MulitpleSelect";
import { H5 } from "../textStyles/style";
import DatePicker from "../datePicker";

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
const Interdivalignwide = styled.div`
  width: 35vw;
  display: inline-block;
  margin-right: 5vw;
`;

const InputCompany = () => {
  /*declaration variable*/

  const [nomEnt, setNomEnt] = useState("");
  const [group, setGroup] = useState("");
  const [telStd, setTelStd] = useState("");
  const [siret, setSiret] = useState("");
  const [ext, setExt] = useState("");
  const [nbremployEnt, setEmployEnt] = useState("");
  const [nbremployTot, setEmployTot] = useState("");
  const [nbrSub, setNbrSub] = useState("");
  const currentDate = new Date();
  const [dateStart, setDateStart] = useState(currentDate);
  const [dateEnd, setDateEnd] = useState(currentDate);
  const [code, setCode] = useState("");

  /*date handler*/

  const handleChangeDateEnd = (newValue) => {
    if (newValue < dateStart) {
      alert("mauvaise date");
    }
    if (newValue > dateStart) {
      setDateEnd(newValue);
    }
  };
  const handleChangeDateStart = (newValue) => {
    if (dateEnd < newValue) {
      alert("mauvaise date");
    }
    if (dateEnd > newValue) {
      setDateStart(newValue);
    }
  };

  /*multiple variable selected*/

  const type = [
    { label: "Prospect", value: "Prospect" },
    { label: "Client", value: "Client" },
    { label: "Pilote", value: "Pilote" },
  ];
  const [selectedType, setSelectedType] = useState("");

  /* Secteur */

  const Secteurs = [
    {
      label: "Agriculture/Agroalimentaire",
      value: "agriculture",
    },
    { label: "Industrie", value: "industry" },
    { label: "Tourisme", value: "tourism" },
    { label: "Energie", value: "energy" },
    { label: "Commerce/Artisanat", value: "trade" },
    { label: "Télécom/internet", value: "telecom" },
    { label: "Finance/Assurance", value: "finance" },
    { label: "Santé", value: "health" },
    { label: "Public/Ministères", value: "public" },
  ];
  const [selectedSecteur, setSelectedSecteur] = useState("");

  /* Subscription type */

  const typeSub = [
    { label: "Basic 1 trail", value: "Basic 1 trail" },
    { label: "Basic 3 trails", value: "Basic 3 trails" },
    { label: "Basic 5 trails", value: "Basic 5 trails" },
    { label: "Basic Full", value: "Basic Full" },
    { label: "Advanced 1 trail", value: "Advanced 1 trail" },
    { label: "Advanced 3 trails", value: "Advanced 3 trails" },
    { label: "Advanced 5 trails", value: "Advanced 5 trails" },
    { label: "Advanced Full", value: "Advanced Full" },
    { label: "Curious 1 trail", value: "Curious 1 trail" },
    { label: "Curious 3 trails", value: "Curious 3 trails" },
    { label: "Curious 5 trails", value: "Curious 5 trails" },
    { label: "Curious Full", value: "Curious Full" },
  ];
  const [selectedTypeSub, setSelectedTypeSub] = useState(
    new Array(typeSub.length)
  );
  return (
    <Card>
      <Interdivalign>
        <H5>Saisie Entreprise</H5>
        <Input
          placeholder="Nom"
          value={nomEnt}
          onChange={(e) => setNomEnt(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="Groupe"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="Tel Standard"
          value={telStd}
          onChange={(e) => setTelStd(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="SIRET"
          value={siret}
          onChange={(e) => setSiret(e.target.value)}
        />
      </Interdivalign>
      <Interdivalign>
        <SelectInput
          values={type}
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          placeholder="Type"
        ></SelectInput>
        <Interdiv></Interdiv>
        <SelectInput
          values={Secteurs}
          value={selectedSecteur}
          onChange={(e) => setSelectedSecteur(e.target.value)}
          placeholder="Secteur d'activité"
        ></SelectInput>
      </Interdivalign>
      <Interdiv></Interdiv>
      <Interdivalignwide>
        <Input
          placeholder="Extensions domaine pro (espacez les domaine via des ';')"
          value={ext}
          onChange={(e) => setExt(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="Nombre d'employés Ent"
          value={nbremployEnt}
          onChange={(e) => setEmployEnt(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="Nombre d'employés Total du groupe"
          value={nbremployTot}
          onChange={(e) => setEmployTot(e.target.value)}
        />
        <Interdiv></Interdiv>
        <Input
          placeholder="Nombre d'abonnements salarié commandés"
          value={nbrSub}
          onChange={(e) => setNbrSub(e.target.value)}
        />
        <Interdiv></Interdiv>
        <DatePicker
          label="Date de fin d'abonnement"
          value={dateStart}
          setValue={handleChangeDateStart}
        />

        <Interdiv></Interdiv>
        <DatePicker
          label="Date de fin d'abonnement"
          value={dateEnd}
          setValue={handleChangeDateEnd}
        />
        <Interdiv></Interdiv>
        <MultipleSelect
          options={typeSub}
          selectedValues={selectedTypeSub}
          setSelectedValues={setSelectedTypeSub}
          placeholder="Related Trails"
        />
      </Interdivalignwide>
      <Interdivalign>
        <Input
          placeholder="CODE"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <Interdiv></Interdiv>
      </Interdivalign>
    </Card>
  );
};
export default InputCompany;
