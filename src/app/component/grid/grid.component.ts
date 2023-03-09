import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/service/message.service';
import { TimerService } from 'src/app/service/timer.service';
import { GridAction } from 'src/app/store/grid.action';
import { GridSelector } from 'src/app/store/grid.selector';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  constructor(private store: Store, private timerService: TimerService, private messageService: MessageService) {}
  $game: Observable<any> = this.store.select(GridSelector);

  onPlay(cell: [number, number], event: MouseEvent) {
    if (event.shiftKey) {
      this.store.dispatch(GridAction.shiftPlay({ cell }))
    } else {
      if (!this.timerService.gameStart) {
        this.timerService.gameStart = true;
        this.timerService.onStart();
      }
      this.store.dispatch(GridAction.play({ cell }))
      this.$game.subscribe((game) => {
        if (game.lose) {
          document.getElementById("message")?.classList.add("on-message");
          document.getElementById("container")?.classList.add("pointer-none")
          this.timerService.onEnd();
          this.messageService.lose = true;
        } else if (game.win) {
          document.getElementById("message")?.classList.add("on-message");
          document.getElementById("container")?.classList.add("pointer-none")
          this.timerService.onEnd();
          this.messageService.win = true;
        }
      })
    }
  }
}
