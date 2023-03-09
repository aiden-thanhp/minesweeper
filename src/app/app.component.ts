import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GridAction, level } from './store/grid.action';
import { GridSelector } from './store/grid.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'minesweeper';
  level: level = 0;

  constructor(private store: Store) {}

  $game = this.store.select(GridSelector)

  ngOnInit(): void {
    const level = this.level;
    this.store.dispatch(GridAction.getGrid({ level }))
  }
}
