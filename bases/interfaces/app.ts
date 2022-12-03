// Crear interfaces

interface auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear: () => void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const _batimovil:auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface iGuason{
  reir: boolean,
  comer:boolean,
  llorar:boolean
}

const guason: iGuason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:iGuason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface iFN{
  (ciudadanos:string[]): number
}

const ciudadGotica:iFN = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona {}