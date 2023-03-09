import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService { 
  time: number = 0;
  timer: any;
  gameStart: boolean = false;

  onStart() {
    this.timer = setInterval(() => {
      this.time ++;
    }, 1000)
  }

  onEnd() {
    clearInterval(this.timer)
  }
  
  constructor() { }
}
