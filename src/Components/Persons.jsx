import React, { useState } from "react";
import Person from "./person/Person.jsx";
import Ada from "../img/Ada.png";
import Bill from "../img/Bill.png";
import Gosling from "../img/Gosling.png";
import Sergio from "../img/Sergio.png";
import Niklaus from "../img/Niklaus.png";
import { useParams } from "react-router-dom";
import {  Link  } from 'react-router-dom';

const Persons = () => {
  const [persons, setPersons] = useState([
    {
      id: "ada",
      img: Ada,
      name: "Ada Lovelance",
      description:
        "Las notas que creó para el desarrollo de dicha máquina analítica incluyen lo que se podría reconocer hoy en día como el primer algoritmo creado con el único propósito de ser procesado por una máquina",
      url: "https://psicologiaymente.com/biografias/ada-lovelace",
    },

    {
      id: "niklaus",
      img: Niklaus,
      name: "Niklaus Wirth",
      description:
        "Informático suizo que es considerado como el padre de la programación moderna tal y como la conocemos hoy en día, entre otros campos de la ingeniería de software.",
      url: "https://es.wikipedia.org/wiki/Niklaus_Wirth",
    },

    {
      id: "bill",
      img: Bill,
      name: "Bill Gates",
      description:
        "Posiblemente el programador más famoso de todos los tiempos. Bill Gates es un magnate de los negocios estadounidenses, programador informático, pionero del desarrollo del PC, inversionista y filántropo. Él es el co-fundador, ex oficial ejecutivo y actual presidente de Microsoft, que es la mayor compañía de software para ordenadores personales del mundo.",
      url: "https://es.wikipedia.org/wiki/Bill_Gates",
    },
    {
      id: "gosling",
      img: Gosling,
      name: "James Gosling",
      description:
        "Conocido como el padre del lenguaje de programación Java. Es un famoso científico de la computación. Programador experto que puede presumir de ser el fundador de Java en Sun Microsystems.",
      url: "https://www.ecured.cu/James_Gosling",
    },
    {
      id: "sergio",
      img: Sergio,
      name: "Sergio Marentes",
      description:
        "Desarrollador Full Stack, amante de las tecnologías web y JavaScript y mentor en Ada-School",
      url: "https://www.linkedin.com/in/samarentesm/?originalSubdomain:co",
    },
  ]);

  const { personas } = useParams();
  const [elegido] = persons.filter((persona) => persona.id === personas);
  return (
    <div className="row">
      {elegido ? (
        <Person
          name={elegido.name}
          description={elegido.description}
          url={elegido.url}
          img={elegido.img}
        />
      ) : (
        <div>No se encontró tu personaje</div>
      )}

      <Link className="link" to='/'><button className="tarea-boton-home">Regresar</button></Link>
    </div>
  );
};

export default Persons;
