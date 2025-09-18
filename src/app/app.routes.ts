import { Routes } from '@angular/router';
import { ChampionComponent } from './pages/champion/champion.component';
import { MyExampleComponent } from './pages/my-example/my-example.component';
import { PopesComponent } from './pages/popes/popes.component';

export const routes: Routes = [

    {
        path: "",
        component: ChampionComponent
    },
    {
        path: "my-example",
        component: MyExampleComponent
    },
    {
        path: "popes",
        component: PopesComponent
    }

];
