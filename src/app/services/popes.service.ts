import { effect, Inject, Injectable, signal } from "@angular/core";
import { Champion } from "../interfaces/champion.interface";
import { Pope } from "../interfaces/popes.interface";



@Injectable({
    providedIn: 'root'
})

export class PopesService {

    popes = signal<Pope[]>([
        {id: 1, name: "papa prueba", description: "descripcion papa prueba"},
        {id: 1, name: "papa prueba 2 ", description: "descripcion papa prueba 2"},
        

    ])


    agregarPapa(pope : Pope){
         this.popes.update((list) => [...list, pope])

    }
    


}