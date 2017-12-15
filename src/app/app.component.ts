import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  days: String[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  title: String = 'TODO';
  displayDays: DisplayField[] = [];

  constructor() {

  }

  ngOnInit() {
    let num = [0, 1, 2, 3, 4, 5, 6];
    let now = new Date();
    for (let n of num) {
      let tempDate = new Date();
      tempDate.setDate(now.getDate() + n);
      let title = tempDate.getDay() == now.getDay() ? "Today" : tempDate.getDay() == now.getDay() + 1 ? "Tomorrow" : this.days[tempDate.getDay()];

      this.displayDays.push({
        date: tempDate,
        title: title,
        tasks: [
          {
            title: "Some Title",
            description: "Some Task Description",
            label: "Important"
          }
        ]
      });
    }
  }

}

interface DisplayField {
  date: Date;
  title: String;
  tasks: Task[];
}

interface Task {
  title: String;
  description: String;
  label: String;
}