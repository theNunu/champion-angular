import { Component, inject } from '@angular/core';
import { AddPopesComponent } from "../../components/popes/add-popes/add-popes.component";
import { ListPopesComponent } from "../../components/popes/list-popes/list-popes.component";
import { PopesService } from '../../services/popes.service';

@Component({
  selector: 'app-popes',
  imports: [AddPopesComponent, ListPopesComponent],
  templateUrl: './popes.component.html',
  styleUrl: './popes.component.css'
})
export class PopesComponent {
   public popesService = inject(PopesService)

}
