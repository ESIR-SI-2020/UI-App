import { HttpCaller } from './httpCaller';
import { HttpCallOptions } from './httpCallOptions';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = new HttpHeaders({
  // "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  // "x-rapidapi-key": "ff942a6c0emshac1c8821c82f00bp11636cjsnc076cd832ae2"
})

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: any
  pokemon: any



  constructor(
    private httpCaller: HttpCaller
  ) { }

  findAll() {
    const httpCallOptions: HttpCallOptions = { url: "/pokemon", method: "get", headers: httpOptions } as HttpCallOptions;
    this.pokemons = this.httpCaller.call<any>(httpCallOptions).then((item) => {
      return item.results;
    });

    return this.pokemons;
  }

  getPokemonDetails(pokemonName: string){
    const httpCallOptions: HttpCallOptions = { url: "/pokemon"+"/"+pokemonName, method: "get", headers: httpOptions } as HttpCallOptions;
    this.pokemon =  this.httpCaller.call<any>(httpCallOptions).then((poke) => {
      return poke.species
    });
    return this.pokemon
  }
}
