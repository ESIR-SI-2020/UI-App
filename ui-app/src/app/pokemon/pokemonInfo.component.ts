import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pokeInfo',
    templateUrl: './pokemonInfo.component.html',
})
export class PokemonInfoComponent implements OnInit {
    isLoading: boolean;
    pokemon: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: PokemonService
    ) { }

    ngOnInit() {
        try {
            this.isLoading = true;
            let pokeName: string
            this.route.paramMap.subscribe(paramMap =>
                pokeName = paramMap.get('name')
            )
            this.service.getPokemonDetails(pokeName).then(data => this.pokemon = data);
        } catch (error) {
            console.error(error)
        }
        finally {
            this.isLoading = false
        }
        
    }
}