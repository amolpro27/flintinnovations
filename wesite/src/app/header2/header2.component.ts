import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-header2",
  templateUrl: "./header2.component.html",
  styleUrls: ["./header2.component.scss"]
})
export class Header2Component implements OnInit {
  isMenuSubOptionClicked = {
    about: 0,
    flint: 0,
    amnioticare: 0,
    ourclients: 0
  };
  public isMenuCollapsed = true;

  @ViewChild("navbarToggler", { static: false }) navbarToggler: ElementRef;
  constructor() {}

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav(menuSubOption) {
    this.resetDefaultValues();
    if (menuSubOption != null) {
      this.isMenuSubOptionClicked[menuSubOption] = 1;

      console.log(this.isMenuSubOptionClicked);
    }

    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  resetDefaultValues() {
    this.isMenuSubOptionClicked = {
      about: 0,
      flint: 0,
      amnioticare: 0,
      ourclients: 0
    };
  }

  ngOnInit() {}
}
