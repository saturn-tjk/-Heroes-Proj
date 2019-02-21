import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';


import { AppComponent }         from './app.component/app.component';
import  { HeroDetailComponent } from  './app.component/hero-detail.component';
import  { HeroService }         from './hero.service';
import { AppComponent2 }        from './app.component2/app-component2';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    AppComponent2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent, AppComponent2]
})
export class AppModule { }
