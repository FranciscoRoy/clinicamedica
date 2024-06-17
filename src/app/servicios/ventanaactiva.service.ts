import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VentanaActivaService{
  private ventanaActivaSubject = new BehaviorSubject<string>('inicio');

  cambiarVentana(ventana: string) {this.ventanaActivaSubject.next(ventana);}
  
  getVentanaActiva(){return this.ventanaActivaSubject;}


}
