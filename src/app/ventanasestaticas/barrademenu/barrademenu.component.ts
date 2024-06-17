/*
import { Component } from '@angular/core';
import { VentanaActivaService } from '../../servicios/ventanaactiva.service';

@Component({
  selector: 'app-barrademenu',
  standalone: true,
  imports: [],
  templateUrl: './barrademenu.component.html',
  styleUrls: ['./barrademenu.component.css']
})
export class BarraDeMenuComponent {
  constructor(private ventanaActivaService: VentanaActivaService) {}


  inicio() {
    this.ventanaActivaService.cambiarVentana('inicio');}

  ingresar() {
    this.ventanaActivaService.cambiarVentana('ingreso');}

  registrarse() {
    this.ventanaActivaService.cambiarVentana('registro');}

  misDatos() {
    this.ventanaActivaService.cambiarVentana('datospersonales');}

  salir() {
    this.ventanaActivaService.cambiarVentana('salir');}
}
*/

import { Component, OnInit } from '@angular/core';
import { VentanaActivaService } from '../../servicios/ventanaactiva.service';
import { UsuarioActivoService } from '../../servicios/usuario-activo.service';
import { Paciente, Profesional, Gerente, UsuariosinIngresar, Usuario } from '../../clases/usuario';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-barrademenu',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './barrademenu.component.html',
  styleUrls: ['./barrademenu.component.css']
})
export class BarraDeMenuComponent implements OnInit {

  usuarioActivo: Usuario = new UsuariosinIngresar();

  constructor(
    private ventanaActivaService: VentanaActivaService,
    private usuarioActivoService: UsuarioActivoService,
  ) {}

  ngOnInit() {
    this.usuarioActivoService.usuarioActual$.subscribe(usuario => {
      this.usuarioActivo = usuario;
    });
  }
  
  inicio() {
    this.ventanaActivaService.cambiarVentana('inicio');}

  ingresar() {
    this.ventanaActivaService.cambiarVentana('ingreso');}

  registrarse() {
    this.ventanaActivaService.cambiarVentana('registro');}

  misDatos() {
    this.ventanaActivaService.cambiarVentana('datospersonales');}

  salir() {
    this.usuarioActivoService.setUsuarioActivo(new UsuariosinIngresar);}

  setPaciente() {
    const paciente = new Paciente('John', 'Doe', 'john.doe@example.com', 'password', 'secret');
    this.usuarioActivoService.setUsuarioActivo(paciente);
  }

  setProfesional() {
    const profesional = new Profesional('Jane', 'Doe', 'jane.doe@example.com', 'password', 'secret', 'Cardiología', ['Lunes', 'Miércoles'], 'anotherSecret');
    this.usuarioActivoService.setUsuarioActivo(profesional);
  }

  setGerente() {
    const gerente = new Gerente('Mark', 'Smith', 'mark.smith@example.com', 'password', 'secret');
    this.usuarioActivoService.setUsuarioActivo(gerente);
  }
  
}