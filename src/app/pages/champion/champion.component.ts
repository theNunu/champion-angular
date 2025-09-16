import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AddChampionComponent } from "../../components/champion/add-champion/add-champion.component";
import { ListChampionComponent } from "../../components/champion/list-champion/list-champion.component";
import { ChampionService } from '../../services/champion.service';

@Component({
  selector: 'app-champion',
  imports: [AddChampionComponent, ListChampionComponent],
  templateUrl: './champion.component.html',
  styleUrl: './champion.component.css'
})
export class ChampionComponent {

  public championService = inject(ChampionService)

}
