import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Timer';
  countdown: number = 300;
  timer: any;
  paused: boolean = false;
  running: boolean = false;

  startTimer() {
    this.running = true;
    this.timer = interval(1000).subscribe(() => {
      if(this.countdown > 0 && !this.paused)
        this.countdown--;
      else if(this.countdown === 0) {
        this.timer?.unsubscribe();
      }
    })
  }

  pauseTimer() {
    this.paused = true;
  }

  resumeTimer() {
    this.paused = false;
  }

  resetTimer() {
    this.countdown = 300;
    this.timer?.unsubscribe();
    this.paused = false;
    this.running = false;
  }

  

  // startTimer() {
  //   this.running = true;
  //   this.timer = setInterval(() => {
  //     if(this.countdown > 0 && !this.paused) {
  //       this.countdown--;
  //     } else {
  //       this.pauseTimer();
  //     }
  //   }, 1000)
  // }

  // pauseTimer() {
  //   clearInterval(this.timer);
  //   this.paused = true;
  // }

  // resumeTimer() {
  //   this.paused = false;
  //   this.startTimer();
  // }

  // resetTimer() {
  //   this.countdown = 300;
  //   clearInterval(this.timer);
  //   this.paused = false;
  //   this.running = false;
  // }

}
