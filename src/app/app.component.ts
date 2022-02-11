import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer';
  time: number = 60;
  a:any;
  startTimer() {
    this.a = setInterval(()=>{
      if(this.time === 0) {
        this.pauseTimer();
      }
      else
      this.time = this.time - 1;
    },100);
  }

  pauseTimer() {
    clearInterval(this.a);
  }
}
