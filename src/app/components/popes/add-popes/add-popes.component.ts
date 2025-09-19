import { Component, output, signal } from '@angular/core';
import { Pope } from '../../../interfaces/popes.interface';

@Component({
  selector: 'app-add-popes',
  imports: [],
  templateUrl: './add-popes.component.html',
  styleUrl: './add-popes.component.css'
})
export class AddPopesComponent {
  namePope = signal("")
  descriptionPope = signal("")

   newPope = output<Pope>();


  agregarPapa() {
    if (!this.namePope || !this.descriptionPope) {
      return alert("completa todos los campos sokete")

    }

    const nuevoPapa: Pope = {
      id: Math.floor(Math.random() * 1000),
      name: this.namePope(),
      description: this.descriptionPope(),

    }

    this.newPope.emit(nuevoPapa)

    this.resetFields()

  }

  resetFields() {
    this.namePope.set(""),
      this.descriptionPope.set("")
  }



}
