import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-our-clients",
  templateUrl: "./our-clients.component.html",
  styleUrls: ["./our-clients.component.scss"]
})
export class OurClientsComponent implements OnInit {
  constructor() {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true,
    //default settings:
    autoplay: true,
    autoplaySpeed: 700,
    autoplayTimeout: 1600,
    autoplayHoverPause: false
  };

  ngOnInit() {}
}
