import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() imageName: string;
  @Input() name: string;
  @Input() timeStamp: string;
  @Input() isRetired: boolean;
  assetsFolderPath = '../../../../assets/images/';
  constructor() {}

  ngOnInit() {}
}
