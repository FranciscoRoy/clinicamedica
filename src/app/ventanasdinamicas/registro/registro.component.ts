// registro.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Paciente } from '../../clases/usuario';  // Asegúrate de importar la clase Paciente

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      palabraSecreta: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const nuevoPaciente = new Paciente(
        this.registroForm.value.nombre,
        this.registroForm.value.apellido,
        this.registroForm.value.email,
        this.registroForm.value.password,
        this.registroForm.value.palabraSecreta
      );

      // Aquí puedes agregar la lógica para manejar el registro del nuevo paciente
      // Por ejemplo, enviarlo a un servicio o mostrar un mensaje de éxito
      console.log('Nuevo paciente registrado:', nuevoPaciente);
    } else {
      // Manejar el caso cuando el formulario no es válido
      console.log('El formulario no es válido');
    }
  }
}

