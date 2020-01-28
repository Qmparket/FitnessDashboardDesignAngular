import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button-orange-outline",
  templateUrl: "./button-orange-outline.component.html",
  styleUrls: ["./button-orange-outline.component.scss"]
})
export class ButtonOrangeOutlineComponent implements OnInit {
  @Input() buttonText: string;
  constructor() {}

  ngOnInit() {}
}
