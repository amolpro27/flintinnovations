import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.getElementById("mySidenav").style.display = "none";
    document.getElementById("mySidenav").onclick = function() {
      document.getElementById("mySidenav").style.display = "none";
      document.getElementById("toggle-button").innerHTML = "&#9776;";
    };
 
  }

  // ========= drawer functions=========//

  openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }

  closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

  toggleNav() {
    let display = document.getElementById("mySidenav").style.display;

    if (display == "none") {
      document.getElementById("mySidenav").style.display = "block";
      document.getElementById("toggle-button").innerHTML = "&times";
    } else {
      document.getElementById("mySidenav").style.display = "none";
      document.getElementById("toggle-button").innerHTML = "&#9776;";
    }
  }
}
11;
