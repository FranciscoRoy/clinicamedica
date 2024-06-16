import { Component, OnInit } from '@angular/core';
import { ErrorComponent } from "../../ventanasdinamicas/error/error.component";
import { RegistroComponent } from "../../ventanasdinamicas/registro/registro.component";
import { IngresoComponent } from "../../ventanasdinamicas/ingreso/ingreso.component";
import { UsuarioActivoService } from '../../servicios/usuario-activo.service';
import { Usuario, UsuariosinIngresar} from '../../clases/usuario';

@Component({
    selector: 'app-ventanacentral',
    standalone: true,
    templateUrl: './ventanacentral.component.html',
    styleUrl: './ventanacentral.component.css',
    imports: [ErrorComponent, RegistroComponent, IngresoComponent]
})
export class VentanacentralComponent implements OnInit  {
  usuarioActual: Usuario = new UsuariosinIngresar;

  constructor(private usuarioActivoService: UsuarioActivoService) { }
  ngOnInit(): void {
    this.usuarioActual = this.usuarioActivoService.getUsuarioActivo();
  }
}