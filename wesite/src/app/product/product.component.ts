import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
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
  ngOnInit() {
    console.log(this.href);
  }
}
