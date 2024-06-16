import { Injectable } from '@angular/core';
import { Usuario, UsuariosinIngresar, Paciente, Profesional, Gerente } from '../clases/usuario'; // Importar la clase Usuario

@Injectable({
  providedIn: 'root' // Proveer el servicio a nivel de aplicación
})
export class UsuarioActivoService {

  private usuarioActual: Usuario = new UsuariosinIngresar(); //inicializa con un usuario sin ingreso

  constructor() { }

  // Método para establecer el usuario activo
  setUsuarioActivo(usuario: Usuario) {
    this.usuarioActual = usuario;
  }

  // Método para obtener el usuario activo
  getUsuarioActivo(): Usuario {
    return this.usuarioActual;
  }

  // Método para verificar si hay un usuario activo
  estaUsuarioActivo(): boolean {
    return this.usuarioActual !== null;
  }
}