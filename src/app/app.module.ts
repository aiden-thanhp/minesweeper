import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayWrapperComponent } from './component/play-wrapper/play-wrapper.component';
import { ThemeSwitcherComponent } from './component/theme-switcher/theme-switcher.component';
import { ModeSelectionComponent } from './component/mode-selection/mode-selection.component';
import { StoreModule } from '@ngrx/store';
import { GridReducer } from './store/grid.reducer';
import { GridComponent } from './component/grid/grid.component';
import { TimerComponent } from './component/timer/timer.component';
import { TimePipe } from './pipe/time.pipe';
import { MessageComponent } from './component/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayWrapperComponent,
    ThemeSwitcherComponent,
    ModeSelectionComponent,
    GridComponent,
    TimerComponent,
    TimePipe,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      grid: GridReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
