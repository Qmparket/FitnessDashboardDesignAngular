import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {
  constructor() {}

  imagesArray = [
    { text: '50K Cycle', imgName: 'cycleImg.png' },
    { text: '10K Run', imgName: 'runImg.png' },
    { text: 'Weekly', imgName: 'weeklyImg.png' },
    { text: '5K Swim', imgName: 'swimImg.png' },
    { text: '50K Cycle', imgName: 'row2img1.png' },
    { text: '10K Run', imgName: 'row2img2.png' },
    { text: 'Weekly', imgName: 'row2img3.png' },
    { text: '5K Swim', imgName: 'row2img4.png' }
  ];

  ngOnInit() {}
}
