import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Typewriter from "t-writer.js";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    const target = document.querySelector(".typewrite");

    const writer = new Typewriter(target, {
      loop: false,
      typeSpeed: 70,
      deleteSpeed: 70,
      typeColor: "black",
    });

    writer
      .type("I am not a woman of many words...")
      .rest(500)
      .clear()
      .type("...so I let Marvin speak for me")
      .rest(500)
      .start();
  }

  goToMainPage() {
    alert("Hello");
    //this.router.navigateByUrl("/landing-page");
  }
}
