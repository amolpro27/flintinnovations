import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CarouselModule } from "ngx-owl-carousel-o";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { FlintInnovationsComponent } from "./flint-innovations/flint-innovations.component";
import { AmnioticareComponent } from "./amnioticare/amnioticare.component";
import { OurProductsComponent } from "./our-products/our-products.component";
import { CaroucelComponent } from "./caroucel/caroucel.component";
import { WhatwedoComponent } from "./whatwedo/whatwedo.component";
import { FactsComponent } from "./facts/facts.component";
import { Header2Component } from "./header2/header2.component";
import { ProductComponent } from "./product/product.component";
import { BusductComponent } from "./busduct/busduct.component";
import { HtpanelComponent } from "./htpanel/htpanel.component";
import { RmuComponent } from "./rmu/rmu.component";
import { PPEKitsComponent } from "./ppe-kits/ppe-kits.component";
import { SanitizersComponent } from "./sanitizers/sanitizers.component";
import { WorkGownsComponent } from "./work-gowns/work-gowns.component";
import { FaceShieldsComponent } from "./face-shields/face-shields.component";
import { OurClientsComponent } from "./our-clients/our-clients.component";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ContactComponent,
    PortfolioComponent,
    FlintInnovationsComponent,
    AmnioticareComponent,
    OurProductsComponent,
    CaroucelComponent,
    WhatwedoComponent,
    FactsComponent,
    Header2Component,
    ProductComponent,
    BusductComponent,
    HtpanelComponent,
    RmuComponent,
    PPEKitsComponent,
    SanitizersComponent,
    WorkGownsComponent,
    FaceShieldsComponent,
    OurClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    ServiceWorkerModule.register("./ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
