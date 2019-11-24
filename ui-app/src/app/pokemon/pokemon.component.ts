import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HttpCallOptions } from '../httpCallOptions';
import { HttpCaller } from '../httpCaller';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { MatSpinner } from '@angular/material';




;
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  isLoading: boolean = false;
  error: string;
  pokemons: any;

  constructor(private httpCaller: HttpCaller,
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }


  ngOnInit() {
    this.fetchPokemons()
  }

  fetchPokemons() {
    this.isLoading = true
    try {
      //   // this.isLoading = true
      //   setTimeout(() => {
      //   this.pokemons = this.pokemonService.findAll();
      // },
      //     5000);
      this.pokemons = this.pokemonService.findAll();

    } catch (error) {
      this.error = error.error
    }
    finally {

      this.isLoading = false
    }
  }
}


