import { PokemonComponent } from './pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonInfoComponent } from './pokemon/pokemonInfo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'pokemons', redirectTo: '/pokemons' },
  {path: 'pokemon/:name', component: PokemonInfoComponent},
  {path: 'pokemon', component: PokemonInfoComponent},
  {path: 'pokemons', component: PokemonComponent},
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  //otherwise redirect to login page
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
