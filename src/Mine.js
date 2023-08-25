import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

export const Mine = ({pasarDatos}) => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const [usuarios, setUsuarios] = useState([]);

//   const nuevoArray =  Array.filter(x=> x!== 1)


 const handlerChange = (val) => {

    const id = val.id;
    const value = val.value;


    if(id === 'txtNombre')
        setNombre(value);
    
    if(id === 'txtEdad')
        setEdad(value);

 }

 const handlerAddUser = () => {
    
    const user = {
        usuario: nombre,
        anios: edad
    }

    setUsuarios([...usuarios, user]);


 }

 useEffect(()=>{
    console.log('Usuarios: ', usuarios);
    pasarDatos(usuarios);
 },[usuarios])

 
  const [visible, setVisible] = useState(false);

  const handlerClick = (value) => {};

  
  const footerContent = (
    <div>
      <Button
        label="Agregar"
        icon="pi pi-times"
        onClick={() => handlerAddUser()}
        className="p-button-text"
      />
      <Button
        label="Salir"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <label htmlFor="nombre">Ingrese su nombre: </label>
          <input
            className="m-2"
            type="text"
            id="nombre"
            onChange={(event) => {
              setNombre(event.target.value);
            }}
          ></input>
        </div>
        <div className="col-12">
          <div
            className="btn btn-primary w-100"
            onClick={(e) => {
              handlerClick();
            }}
          >
            Ingresar
          </div>
        </div>
      </div>


      <div className="card flex justify-content-center">
        <Button
          label="Show"
          icon="pi pi-external-link"
          onClick={() => setVisible(true)}
        />
        <Dialog
          header="Header"
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
          footer={footerContent}
        >
          <p className="m-0">
            <div className="card flex justify-content-center">
              Nombre:{" "}
              <InputText
                id="txtNombre"
                value={nombre}
                onChange={(e) => handlerChange({id: e.target.id, value: e.target.value})}
              />
              Edad:{" "}
              <InputText
                id="txtEdad"
                onChange={(e) => handlerChange({id: e.target.id, value: e.target.value})}
              />
            </div>
          </p>


            {usuarios.map((el,index)=>{
                return (
                    <h1>#{index} {el.usuario}: {el.anios} </h1>
                )
            })
                

            }
    
        </Dialog>
      </div>
    </React.Fragment>
  );
};
