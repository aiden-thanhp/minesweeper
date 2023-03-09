import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  win: boolean = false;
  lose: boolean = false;
  constructor() { }
}
