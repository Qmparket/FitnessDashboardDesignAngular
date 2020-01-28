import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      initials: 'HC',
      name: 'Hesters Crossing',
      location: 'Seattle, WA. USA',
      circleColor: 'orange',
      type: 'Training'
    },
    {
      initials: 'GB',
      name: 'Out-n-back',
      location: 'Bend, OR. USA',
      circleColor: 'cyan',
      type: 'Run'
    },
    {
      initials: 'CC',
      name: 'Circle C Loop',
      location: 'Bellevue, WA. USA',
      circleColor: 'pink',
      type: 'Bike'
    },
    {
      initials: 'DS',
      name: 'Dell Springs',
      location: 'Santa Clara, CA. USA',
      circleColor: 'cyan',
      type: 'Run'
    },
    {
      initials: 'CP',
      name: 'Charter Pool #3',
      location: 'Austin, TX. USA',
      circleColor: 'blue',
      type: 'Swim'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
