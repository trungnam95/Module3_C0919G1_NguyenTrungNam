import { Component, OnInit, OnDestroy, Input } from "@angular/core";

@Component({
  selector: "app-countdown-timer",
  templateUrl: "./countdown-timer.component.html",
  styleUrls: ["./countdown-timer.component.css"]
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  constructor() {}
  private intervalid = 0;
  message = "click start button to start countdown";
  remainingTime: number;
  @Input() seconds = 11;
  ngOnInit() {
    this.reset();
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  clearTimer() {
    clearInterval(this.intervalid);
  }
  start() {
    this.countDown();
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at ${this.remainingTime} seconds`;
  }
  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = "click start button to countdown";

  }
  private countDown() {
    this.clearTimer();
    this.intervalid = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
