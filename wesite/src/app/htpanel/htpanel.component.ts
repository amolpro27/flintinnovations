import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-htpanel",
  templateUrl: "./htpanel.component.html",
  styleUrls: ["./htpanel.component.scss"]
})
export class HtpanelComponent implements OnInit {
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

  ngOnInit() {}
}
