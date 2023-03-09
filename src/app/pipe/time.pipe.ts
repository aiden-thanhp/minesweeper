import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const minute = Math.floor(value / 60);
    const second = value % 60;

    return `${minute.toString().length == 1 ? '0' + minute.toString() : minute.toString()}:${second.toString().length == 1 ? '0' + second.toString() : second.toString()}`
  }

}
