import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Mine } from "./Mine";
import "primereact/resources/primereact.min.css"; 
import "primereact/resources/themes/lara-light-indigo/theme.css"; 

const App = () => {
  const [nombre, setNombre] = useState('');

  const handlerMensaje = (value) => {
    console.log("datoQueRecibo: ", value);

    const propiedad = value.propiedad1;
    const valor = value.valor1;

    alert(`El nombre ingresado es: ${nombre}`);

  };

  const handlerCambiarNombre = (value) => {
    //console.log("nombre_recibido: ", value);
    setNombre(value);
  };

  useEffect(()=>{
    console.log('El nombre ingresado es: ', nombre)
  },[nombre])

  useEffect(()=>{
    console.log('se renederizo el componente')
  },[])

  const funcionCapturarDatos =(valor)=>{
    console.log('datos Capturados: ', valor)
  }
  return (
    <React.Fragment>
    <Mine pasarDatos={funcionCapturarDatos}/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="row">
          <div>
            <input
              id="Nombre"
              type="text"
              
              onChange={(event) => {
                handlerCambiarNombre(event.target.value);
              }}
            ></input>
          </div>
          <div
            id="boton_consultar"
            name="valorMine"
            className="btn btn-primary"
            onClick={(event) =>
              handlerMensaje({
                propiedad1: event.target.id,
                valor1: event.target.localName,
              })
            }
          >
            Abrir Formulario de Ingreso de datos
          </div>
        </div>
        <h1>Bienvenidos a mi Programa</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </React.Fragment>
  );
};

export default App;
