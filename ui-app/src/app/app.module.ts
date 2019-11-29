import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpCallOptions } from './httpCallOptions';
import { HttpCaller } from './httpCaller';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatListModule, MatToolbarModule,  MatMenuModule, MatIconModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonInfoComponent } from './pokemon/pokemonInfo.component';
import { PokemonService } from './pokemon.service';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PokemonComponent,
    PokemonInfoComponent,
    LoginComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    HttpCaller,
    PokemonService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
