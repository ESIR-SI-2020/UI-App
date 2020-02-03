import { PokemonComponent } from './pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonInfoComponent } from './pokemon/pokemonInfo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {UserComponent} from './user/user.component'

const routes: Routes = [
  {path: 'pokemons', redirectTo: '/pokemons' },
  {path: 'pokemon/:name', component: PokemonInfoComponent},
  {path: 'user/:username', component: UserComponent},
  {path: 'pokemon', component: PokemonInfoComponent},
  {path: 'pokemons', component: PokemonComponent},
  {path : 'notfound', component : NotfoundComponent},
  {path: '', component: PokemonComponent},
  //otherwise redirect to login page
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
