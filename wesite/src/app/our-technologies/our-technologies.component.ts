import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-technologies",
  templateUrl: "./our-technologies.component.html",
  styleUrls: ["./our-technologies.component.scss"]
})
export class OurTechnologiesComponent implements OnInit {
  path = "../../assets/img/our-technologies/";
  images = [
    { img: this.path + "cloudComputing.webp", desc: "Cloud Computing" },
    { img: this.path + "java.webp", desc: "java" },
    { img: this.path + "nodejs.webp", desc: "node.js" },
    { img: this.path + "mongodb.webp", desc: "mongodb" },
    { img: this.path + "blockchain.webp", desc: "blockchain" },
    { img: this.path + "angularjs.webp", desc: "angularjs" },
    { img: this.path + "reactjs.webp", desc: "reactjs" },
    { img: this.path + "php.webp", desc: "php" },
    { img: this.path + "android.webp", desc: "android" },
    { img: this.path + "ios.webp", desc: "ios" },
    { img: this.path + "mysql.webp", desc: "mysql" },
  ];
  constructor() {}

  ngOnInit() {}
}
