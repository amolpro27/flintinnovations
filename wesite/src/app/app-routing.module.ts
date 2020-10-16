import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from "./services/services.component";
import { OurWorkComponent } from "./our-work/our-work.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { BlogsComponent } from "./blogs/blogs.component";
import { CareersComponent } from "./careers/careers.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SupportComponent } from "./support/support.component";
import { OurTechnologiesComponent } from "./our-technologies/our-technologies.component";
import { ProductComponent } from "./product/product.component";
import { BusductComponent } from "./busduct/busduct.component";
import { HtpanelComponent } from "./htpanel/htpanel.component";
import { RmuComponent } from "./rmu/rmu.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "services", component: ServicesComponent },
  { path: "our-work", component: OurWorkComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "blogs", component: BlogsComponent },
  { path: "careers", component: CareersComponent },
  { path: "our-client", component: OurTechnologiesComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "support", component: SupportComponent },
  { path: "product", component: ProductComponent },
  { path: "busduct", component: BusductComponent },
  { path: "htpanels", component: HtpanelComponent },
  { path: "rmu", component: RmuComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      anchorScrolling: "enabled",
      useHash: true
      //scrollOffset: [0, 0]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  ServicesComponent,
  OurWorkComponent,
  AboutUsComponent,
  BlogsComponent,
  CareersComponent,
  OurTechnologiesComponent,
  ContactUsComponent,
  SupportComponent,
  ProductComponent,
  BusductComponent,
  HtpanelComponent,
  RmuComponent
];
