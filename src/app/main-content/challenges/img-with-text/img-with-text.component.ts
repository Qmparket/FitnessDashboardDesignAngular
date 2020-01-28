import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-with-text',
  templateUrl: './img-with-text.component.html',
  styleUrls: ['./img-with-text.component.scss']
})
export class ImgWithTextComponent implements OnInit {
  @Input() text: string;
  @Input() imgName: string;
  defaultPathToImages = '../../../../assets/images/challenges/';
  constructor() {}

  ngOnInit() {}
}
