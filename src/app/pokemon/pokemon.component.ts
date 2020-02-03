import { Component, OnInit } from '@angular/core';
import { HttpCaller } from '../helpers/httpCaller';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  isLoading: boolean ;
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

      this.pokemons = this.pokemonService.findAll();

    } catch (error) {
      this.error = error.error
    }
    finally {
      this.isLoading = false
      // setTimeout(() => {
      //   this.isLoading = false
      // }, 5000);
    }
  }
}


