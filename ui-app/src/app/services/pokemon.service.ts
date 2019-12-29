import { HttpCaller } from '../helpers/httpCaller';
import { HttpCallOptions } from '../models/httpCallOptions';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


const httpOptions = new HttpHeaders({
  // "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  // "x-rapidapi-key": "ff942a6c0emshac1c8821c82f00bp11636cjsnc076cd832ae2"
})

const baseUrl = `${environment.pokemonUrl}`;

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
    const httpCallOptions: HttpCallOptions = { url: baseUrl+ "/pokemon", method: "get", headers: httpOptions } as HttpCallOptions;
    this.pokemons = this.httpCaller.call<any>(httpCallOptions).then((item) => {
      return item.results;
    });

    return this.pokemons;
  }

  getPokemonDetails(pokemonName: string){
    const httpCallOptions: HttpCallOptions = { url: baseUrl+ "/pokemon"+"/"+pokemonName, method: "get", headers: httpOptions } as HttpCallOptions;
    this.pokemon =  this.httpCaller.call<any>(httpCallOptions).then((poke) => {
      return poke.species
    });
    return this.pokemon
  }
}
