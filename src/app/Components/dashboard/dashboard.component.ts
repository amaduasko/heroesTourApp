import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Interfaces/hero';
import { HeroService } from '../../Services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroServices: HeroService) {}

  getHeroes(): void {
    this.heroServices
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(0, 4)));
  }
  ngOnInit() {
    this.getHeroes();
  }
}
