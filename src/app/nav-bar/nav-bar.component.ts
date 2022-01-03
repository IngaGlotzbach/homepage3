import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
})
export class NavBarComponent implements OnInit {
  public isCollapsed = true;

  expandScreen() {
    this.isCollapsed = !this.isCollapsed;
    if (!this.isCollapsed) {
      console.log("Hello");
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
