import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-caroucel",
  templateUrl: "./caroucel.component.html",
  styleUrls: ["./caroucel.component.scss"]
})
export class CaroucelComponent implements OnInit {
  constructor() {}

  images = [944, 1011, 984].map(n => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit() {}
}
