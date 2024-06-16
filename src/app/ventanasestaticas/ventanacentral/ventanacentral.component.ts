import { Component } from '@angular/core';
import { ErrorComponent } from "../../ventanasdinamicas/error/error.component";
import { RegistroComponent } from "../../ventanasdinamicas/registro/registro.component";
import { IngresoComponent } from "../../ventanasdinamicas/ingreso/ingreso.component";

@Component({
    selector: 'app-ventanacentral',
    standalone: true,
    templateUrl: './ventanacentral.component.html',
    styleUrl: './ventanacentral.component.css',
    imports: [ErrorComponent, RegistroComponent, IngresoComponent]
})
export class VentanacentralComponent {
  ventanaActiva: number = 10;
}
