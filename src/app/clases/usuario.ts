export interface Usuario {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    palabraSecreta: string;
    acceso: number;

    getAcceso(): number;
    getTipoUsuario(): string;
  }
  
  export class UsuariosinIngresar implements Usuario {
    nombre = '';
    apellido = '';
    email = '';
    password = '';
    palabraSecreta = '';
    acceso = 0;

    getAcceso(): number {return this.acceso;}
    getTipoUsuario(): string {return 'usuario sin identificar'}

  }

  export class Paciente implements Usuario {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    palabraSecreta: string;
    acceso = 1;

    getAcceso(): number {return this.acceso;}
    getTipoUsuario(): string {return 'Paciente'}
  
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
    acceso = 2;
    especialidad: string;
    diasAtencion: string[];
    segundaPalabraSecreta: string;

    getAcceso(): number {return this.acceso;}
    getTipoUsuario(): string {return 'Profesional'}
  
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
    acceso = 3;

    getAcceso(): number {return this.acceso;}
    getTipoUsuario(): string {return 'Gerente'}
  
    constructor(nombre: string, apellido: string, email: string, password: string, palabraSecreta: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.palabraSecreta = palabraSecreta;
    }
  }


