import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpCaller } from './helpers/httpCaller';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatInputModule, MatListModule, MatToolbarModule,  MatMenuModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonInfoComponent } from './pokemon/pokemonInfo.component';
import { PokemonService } from './services/pokemon.service';
import { NotfoundComponent } from './notfound/notfound.component';
import {UserService} from './services/user.service';
import {ArticlesComponent} from './article/articles.component';
import {ArticleComponent} from "./article/article.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PokemonComponent,
    PokemonInfoComponent,
    NotfoundComponent,
    ArticlesComponent,
    ArticleComponent,
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
    ReactiveFormsModule,
    MatSidenavModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    HttpCaller,
    PokemonService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
