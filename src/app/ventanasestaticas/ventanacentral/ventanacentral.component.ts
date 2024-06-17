import { Component, OnInit } from '@angular/core';
import { ErrorComponent } from "../../ventanasdinamicas/error/error.component";
import { RegistroComponent } from "../../ventanasdinamicas/registro/registro.component";
import { IngresoComponent } from "../../ventanasdinamicas/ingreso/ingreso.component";
import { UsuarioActivoService } from '../../servicios/usuario-activo.service';
import { Usuario, UsuariosinIngresar} from '../../clases/usuario';
import { VentanaActivaService } from '../../servicios/ventanaactiva.service';
import { InicioComponent } from "../../ventanasdinamicas/inicio/inicio.component";
import { DatospersonalesComponent } from "../../ventanasdinamicas/datospersonales/datospersonales.component";

@Component({
    selector: 'app-ventanacentral',
    standalone: true,
    templateUrl: './ventanacentral.component.html',
    styleUrl: './ventanacentral.component.css',
    imports: [ErrorComponent, RegistroComponent, IngresoComponent, InicioComponent, DatospersonalesComponent]
})
export class VentanacentralComponent implements OnInit  {
  usuarioActual: Usuario = new UsuariosinIngresar;
  ventanaActivaActual: string = 'inicio';

  constructor(
    private ventanaActivaService: VentanaActivaService,
    private usuarioActivoService: UsuarioActivoService,
  ) { }
  ngOnInit(): void {
    this.usuarioActivoService.usuarioActual$.subscribe(usuario => {this.usuarioActual = usuario;});
    this.ventanaActivaService.getVentanaActiva().subscribe(ventanaActiva => {this.ventanaActivaActual = ventanaActiva;})
  }
}
