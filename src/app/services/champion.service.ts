import { effect, Inject, Injectable, signal } from "@angular/core";
import { Champion } from "../interfaces/champion.interface";


const loadFromLocalStorage = (): Champion[] => {
    const employees = localStorage.getItem('champions');
    return employees ? JSON.parse(employees): [];

}

@Injectable({
    providedIn: 'root'
})

export class ChampionService {
    champions = signal<Champion[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        localStorage.setItem('champions', JSON.stringify(this.champions()))
    })


    agregarCampeon(champion: Champion) {
        this.champions.update((list) => [...list, champion])

    }


}