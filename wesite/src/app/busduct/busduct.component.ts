import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-busduct",
  templateUrl: "./busduct.component.html",
  styleUrls: ["./busduct.component.scss"]
})
export class BusductComponent implements OnInit {
  constructor() {}

  public name = "amol";
  email = "ap";
  txtmsg = "app";

  href = "";
  gethref() {
    return (this.href =
      "mailto:sample@sample.com?subject=Customer Enquiry" +
      "&body=" +
      "<b><h3>This is Customer Enquiry :</h3></b>" +
      "<br/><br/>" +
      "Name : " +
      this.name +
      "<br/><br/>" +
      "Email : " +
      this.email +
      "<br/><br/>" +
      "Message : " +
      this.txtmsg +
      "<br/><br/><br/><br/> Thank you.");
  }

  showModal: boolean;
  show() {
    this.showModal = true; // Show-Hide Modal Check
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  ngOnInit() {}
}
