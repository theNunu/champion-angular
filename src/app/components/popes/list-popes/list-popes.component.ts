import { Component, input } from '@angular/core';
import { Pope } from '../../../interfaces/popes.interface';

@Component({
  selector: 'app-list-popes',
  imports: [],
  templateUrl: './list-popes.component.html',
  styleUrl: './list-popes.component.css'
})
export class ListPopesComponent {

  papas = input.required<Pope[]>()

}
