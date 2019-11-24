import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pokeInfo',
    templateUrl: './pokemonInfo.component.html',
})
export class PokemonInfoComponent implements OnInit {

    pokemon: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: PokemonService
    ) { }

    ngOnInit() {

        let pokeName: string
        this.route.paramMap.subscribe(paramMap =>
            pokeName = paramMap.get('name')
        )

        this.pokemon = this.service.getPokemonDetails(pokeName);
        console.log(this.service.getPokemonDetails(pokeName))

        //TODO: ici le blème
        console.log(    Object.keys(this.pokemon)[0] )
        console.log( JSON.parse(JSON.stringify(this.pokemon)))
    }
}