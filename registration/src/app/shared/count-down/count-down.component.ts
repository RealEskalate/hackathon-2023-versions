import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent {
  targetDate: Date;
  daysLeft: number | undefined;
  hoursLeft: number | undefined;
  minutesLeft: number | undefined;
  secondsLeft: number | undefined;
  quarterFinalDate: Date;
  eventDate = "August 19";
  eventText = "Our hackathon will start with workshops on";

  constructor() {
    this.targetDate = new Date(2023, 7, 19, 11);
    this.quarterFinalDate = new Date(2023, 8, 1, 11);
  }

  chooseTargetDate(): number {
    const currentDate = new Date().getTime();
    if (currentDate < this.targetDate.getTime()) {
      return this.targetDate.getTime();
    } else {
      this.eventDate = "September 1";
      this.eventText = "Our hackathon Quarter-Finals will start on";
      return this.quarterFinalDate.getTime();
    }
  }

  ngOnInit(): void {
    this.calculateTimeLeft();
    setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  calculateTimeLeft(): void {
    const currentDate = new Date();
    const timeDifference = this.chooseTargetDate() - currentDate.getTime();
    this.daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));
    this.hoursLeft = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    this.minutesLeft = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));
    this.secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }

  protected readonly Number = Number;

}