/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import React from "react";
// import ReactDOM from "react-dom";

// const array = ["Peras", "Manzanas", "Sandias"];

/* const render = (       //DEJAR COMENTADO PARA EL EJERCICIO
  <ol>
    <li>{array[0]}</li>
    <li>{array[1]}</li>
    <li>{array[2]}</li>
  </ol>
); */

// const TituloFrutas = () => {
//   return <h1>Frutas:</h1>
// }

// const Subtitulo = () => <h4>Título 2</h4>;

// const Parrafo = () => <p>Lorem</p>;

// const Lista = () => {
//   return (
//     <ol>
//         <li>{array[0]}</li>
//         <li>{array[1]}</li>
//         <li>{array[2]}</li>
//      </ol>
//   );
// };

// const Frutas = () => {
//   return (
//     <>
//       <TituloFrutas />
//       <Subtitulo />
//       <Parrafo />
//       <Lista />     
// 	  </>
//   );
// };

// ReactDOM.render(
// 	<Frutas />, 
// 	document.getElementById("root")
// );

// Ejercicio - RESUELTO. Ver código de arriba
// 1.-Modificar el código de arriba y crear un componente que se llame "subtitulo" y que acepte el h4 "Titulo 2"
// 2.- Luego, generar un componente llamado "parrafo" que dentro lleve un párrafo.
// 3.- Generar un último componente que contenga la ol con sus items.


// ==============================================================================================================
// PARTE 2 DE LA CLASE: a partir de 2:34:10

import React from "react";
import ReactDOM from "react-dom";

const array = ["Peras", "Manzanas", "Sandias"];

const render = (
  <ol>
    <li>{array[0]}</li>
    <li>{array[1]}</li>
    <li>{array[2]}</li>
  </ol>
);

const TituloFrutas = (props) => {
  const { titulo, id } = props;
  return (
    <>
      <h1>{titulo}</h1>
      <p>El id es: {id}</p>
    </>
  );
};

const Subtitulo = ({ sub, num }) => <h4>{num * 2}</h4>;

const Parrafo = () => <p>Lorem solo</p>;

const Lista = () => (
  <ol>
    <li>{array[0]}</li>
    <li>{array[1]}</li>
    <li>{array[2]}</li>
  </ol>
);

const Frutas = () => {
  return (
    <>
      <TituloFrutas titulo="Un titulo para Frutas" id={1} />
      <Subtitulo sub="Esto es un subtitulo" num={5} />
      <Parrafo />
      <Lista />
    </>
  );
};

ReactDOM.render(
  <Frutas />,
  /*
  React.createElement(
    "ol",
    null,
    React.createElement("li", null, array[0]),
    React.createElement("li", null, array[1]),
    React.createElement("li", null, array[2])
  )*/ document.getElementById(
    "root"
  )
);




