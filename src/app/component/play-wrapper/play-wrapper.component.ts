import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GridSelector } from 'src/app/store/grid.selector';

@Component({
  selector: 'app-play-wrapper',
  templateUrl: './play-wrapper.component.html',
  styleUrls: ['./play-wrapper.component.scss']
})
export class PlayWrapperComponent {
  constructor(private store: Store) {}
  $game: Observable<any> = this.store.select(GridSelector)
}
