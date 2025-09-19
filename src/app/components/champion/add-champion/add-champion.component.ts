import { Component, output, signal } from '@angular/core';
import { Champion } from '../../../interfaces/champion.interface';

@Component({
  selector: 'app-add-champion',
  imports: [],
  templateUrl: './add-champion.component.html',
  styleUrl: './add-champion.component.css'
})
export class AddChampionComponent {
  nameChampion = signal("")
  rolChampion = signal("")
  descriptionChampion = signal("")


  newChampion = output<Champion>();

  agregarCampeon() {
    if(!this.nameChampion() || !this.rolChampion() || !this.descriptionChampion()){
      return alert("completa todos los campos sokete")

    }

    const nuevoCampeon: Champion = {
      id: Math.floor(Math.random() * 1000),
      name: this.nameChampion(),
      rol: this.rolChampion(),
      description: this.descriptionChampion(),

    }

    this.newChampion.emit(nuevoCampeon)
    this.resetFields()

  }

  resetFields(){
    this.nameChampion.set(""),
    this.rolChampion.set(""),
    this.descriptionChampion.set("")
  }


}
