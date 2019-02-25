import {Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-root2',
  templateUrl: 'app-component2.html',
  styleUrls: ['app-component2.css']
})
export class AppComponent2 implements OnInit, OnChanges {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
 newHero2;
  constructor() { }

  addHero(hero: string) {
    if (hero) this.heroes.push(hero);
    this.newHero2 = hero;
  }

  clickMessage = '';
  onClickMe() {
    this.clickMessage += 'You are my hero!';
  }

  ngOnInit() {
  }

  ngOnChanges () {
    console.log('changed');
  }

}
