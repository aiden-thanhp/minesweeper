import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TimerService } from 'src/app/service/timer.service';
import { GridAction, level } from 'src/app/store/grid.action';
import { GridSelector } from 'src/app/store/grid.selector';

@Component({
  selector: 'app-mode-selection',
  templateUrl: './mode-selection.component.html',
  styleUrls: ['./mode-selection.component.scss']
})
export class ModeSelectionComponent implements OnInit {
  mode: level = 0;

  ngOnInit(): void {
    this.store.select(GridSelector).subscribe((game: any) => {
      this.mode = game.total == 100 ? 0 : game.total == 256 ? 1 : 2;
    })
  }

  constructor(private store: Store, private timerService: TimerService) {}
  onChoseMode(level: level) {
    this.timerService.onEnd();
    this.timerService.time = 0;
    this.timerService.gameStart = false;
    this.mode = level;
    this.store.dispatch(GridAction.getGrid({ level }))
  }
}
