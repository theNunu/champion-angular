import { Component, input } from '@angular/core';
import { Champion } from '../../../interfaces/champion.interface';

@Component({
  selector: 'app-list-champion',
  imports: [],
  templateUrl: './list-champion.component.html',
  styleUrl: './list-champion.component.css'
})
export class ListChampionComponent {

  champions = input.required<Champion[]>()

 

}
