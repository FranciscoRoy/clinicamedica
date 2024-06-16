import { Injectable } from '@angular/core';
import { Usuario, Paciente, Profesional, Gerente } from '../clases/usuario'; // Importar la clase Usuario

@Injectable({
  providedIn: 'root' // Proveer el servicio a nivel de aplicación
})
export class UsuarioActivoService {

  private usuarioActual: Usuario | null; // Propiedad privada para almacenar el usuario

  constructor() { 
    this.usuarioActual = null; // Initialize with null initially
  }

  // Método para establecer el usuario activo
  setUsuarioActivo(usuario: Usuario | null) {
    this.usuarioActual = usuario;
  }

  // Método para obtener el usuario activo
  getUsuarioActivo(): Usuario | null {
    return this.usuarioActual;
  }

  // Método para verificar si hay un usuario activo
  estaUsuarioActivo(): boolean {
    return this.usuarioActual !== null;
  }

  // Método para obtener el tipo de usuario activo (paciente, profesional, gerente)
  getTipoUsuario(): string | null {
    if (this.estaUsuarioActivo()) {
      if (this.usuarioActual instanceof Paciente) {
        return 'Paciente';
      } else if (this.usuarioActual instanceof Profesional) {
        return 'Profesional';
      } else if (this.usuarioActual instanceof Gerente) {
        return 'Gerente';
      } else {
        return null; // Manejar casos inesperados
      }
    } else {
      return null;
    }
  }
}