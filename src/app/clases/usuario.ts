export interface Usuario {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    palabraSecreta: string;
  }
  
  export class Paciente implements Usuario {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    palabraSecreta: string;
  
    constructor(nombre: string, apellido: string, email: string, password: string, palabraSecreta: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.palabraSecreta = palabraSecreta;
    }
  }
  
  export interface Profesional extends Usuario {
    especialidad: string;
    diasAtencion: string[];
    segundaPalabraSecreta: string;
  }
  
  export class Profesional implements Profesional { 
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    palabraSecreta: string;
    especialidad: string;
    diasAtencion: string[];
    segundaPalabraSecreta: string;
  
    constructor(
      nombre: string,
      apellido: string,
      email: string,
      password: string,
      palabraSecreta: string,
      especialidad: string,
      diasAtencion: string[],
      segundaPalabraSecreta: string
    ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.palabraSecreta = palabraSecreta;
      this.especialidad = especialidad;
      this.diasAtencion = diasAtencion;
      this.segundaPalabraSecreta = segundaPalabraSecreta;
    }
  }
  
  export class Gerente implements Usuario {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    palabraSecreta: string;
  
    constructor(nombre: string, apellido: string, email: string, password: string, palabraSecreta: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.palabraSecreta = palabraSecreta;
    }
  }  
