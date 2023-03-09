import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TimerService } from 'src/app/service/timer.service';
import { GridAction } from 'src/app/store/grid.action';
import { GridSelector } from 'src/app/store/grid.selector';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  constructor(private store: Store, private timerService: TimerService) {}

  $game: Observable<any> = this.store.select(GridSelector);
  onPlayAgain() {
    document.getElementById("message")?.classList.remove("on-message");
    const level = 0;
    setTimeout(() => {
      this.store.dispatch(GridAction.getGrid({ level }))
      this.timerService.time = 0;
      this.timerService.gameStart = false;
      document.getElementById("container")?.classList.remove("pointer-none")
    }, 2000)
  }
}
