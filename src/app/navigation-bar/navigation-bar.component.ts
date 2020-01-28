import { Component, OnInit } from "@angular/core";

export interface TabItem {
  title: string;
  isSelected: boolean;
}

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"]
})
export class NavigationBarComponent implements OnInit {
  tabItems: TabItem[] = [
    { title: "Dashboard", isSelected: true },
    { title: "Activities", isSelected: false },
    { title: "Badges", isSelected: false },
    { title: "Calendar", isSelected: false },
    { title: "Connections", isSelected: false },
    { title: "Devices", isSelected: false }
  ];

  currentTab: TabItem;
  constructor() {}

  ngOnInit() {
    this.currentTab = this.tabItems[0];
  }

  onNavTabClicked(tabItem: TabItem) {
    this.currentTab.isSelected = false;
    this.currentTab = tabItem;
    this.currentTab.isSelected = true;
  }
}
