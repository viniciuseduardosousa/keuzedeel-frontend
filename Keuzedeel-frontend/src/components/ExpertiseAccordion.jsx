import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ExpertiseAccordion = () => {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Team Wibaut
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Multidisciplinaire projecten, programma’s en vraagstukken in het ruimtelijk en sociale domein en bedrijfsvoering vragen om ervaring en kennis op het hoogste niveau. Vanuit het Projectmanagementbureau biedt team Wibaut topadviseurs die op interim-basis de functie van manager, regisseur en project- of programmadirecteur vervullen.
        <a className="text-blue-800 mt-3 hover:underline" href="https://www.amsterdam.nl/pmb/expertise/team-wibaut/"> <br/>Meer over Team Wibaut</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Projectmanagement
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Welk resultaat wilt u bereiken? Onze projectmanagers maken heldere en haalbare afspraken en sturen op het resultaat dat u wilt bereiken. Zij houden de beheersaspecten op orde (financiën, organisatie, planning, informatie en communicatie) en betrekken de juiste belanghebbenden en belangstellenden bij het project.
        <a className="text-blue-800 mt-3 hover:underline" href="https://www.amsterdam.nl/pmb/expertise/projectmanagement/"> <br/>Meer over Projectmanagement</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Programmamanagement
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Veranderopgave, strategiewijziging of complexe beleidsopgave? Onze programmanagers helpen u doelgericht bij de realisatie of uitvoering daarvan. Zij zetten projecten en activiteiten op en voeren deze uit om het gewenste resultaat te behalen.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Procesmanagement
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Een complex bestuurlijk proces met strijdige belangen? 
        Onze procesmanagers organiseren en begeleiden de interactie tussen organisaties/partijen voor een goede samenwerking. 
        Van de analyse tot en met de evaluatie en altijd onafhankelijk.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Bouwmanagement
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        (Her)huisvesting, kantoren, scholen en sportcomplexen: onze bouwmanagers kennen de specifieke Amsterdamse situatie en regels en begeleiden het gehele proces van uw (maatschappelijk) vastgoed. Van voorbereiding, ontwerpmanagement, vergunningentraject, tot aanbesteding en uitvoering van (ver)bouwprojecten.
        <a className="text-blue-800 mt-3 hover:underline" href="https://www.amsterdam.nl/pmb/expertise/bouwmanagement/"> <br/>Meer over Bouwmanagement</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`border-b-0 transition-colors ${
            open === 6 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Maatschappelijk vastgoed
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Onze maatschappelijk vastgoed adviseurs ontwikkelen in opdracht voorzieningenprogramma's voor transformatie- en stedelijke vernieuwingsgebieden, programma's van eisen voor maatschappelijke voorzieningen en beheer- en exploitatieplannen.
        <a className="text-blue-800 mt-3 hover:underline" href="https://www.amsterdam.nl/pmb/expertise/bmv/"> <br/>Meer over Maatschappelijk Vastgoed</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className={`border-b-0 transition-colors ${
            open === 7 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Planning en structurering
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        In welke fase uw project zich ook bevindt, de planningsadviseurs van het Projectmanagementbureau bieden u altijd een helder en gestructureerd overzicht van uw project. Van een ‘quick-scan’ tot gedetailleerde variantenstudies en scenario’s met diverse oplossingsrichtingen.
        <a className="text-blue-800 mt-3 hover:underline" href="https://www.amsterdam.nl/pmb/expertise/planning/"> <br/>Planning en Structurering</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className={`border-b-0 transition-colors ${
            open === 8 ? "text-red-500 hover:!text-red-700" : ""
          }`}
        >
          Meer informatie over inhuur
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal">
        Voor meer informatie over het inhuren van onze projectmanagers, bouwmanagers, planningsadviseurs of topadviseurs van de Wibautgroep kunt u contact opnemen met onze afdeling
        <a className="text-blue-800 mt-3 hover:underline" href="mailto:mg_pmb.mat­chin­ge­nac­count­ma­na­ge­ment@am­ster­dam.nl"> <br/>Matching & Accountmanagement </a>
        </AccordionBody>
      </Accordion>
    </>
  );
};
  
  export default ExpertiseAccordion; 