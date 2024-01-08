import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(seconds: number): string {
    const rem_minutes: number = Math.floor(seconds / 60);
    const rem_seconds: number = seconds % 60;

    return `${this.pad(rem_minutes)}:${this.pad(rem_seconds)}`;
  }

  private pad(x: number): string {
    return x < 10 ? `0${x}` : `${x}`;
  }

}
