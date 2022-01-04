import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadlineComponent } from './headline/headline.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingPageComponent, NavBarComponent, HeadlineComponent, AboutComponent, ProjectsComponent, CvComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: LandingPageComponent },
      { path: "about", component: AboutComponent },
      { path: "projects", component: ProjectsComponent },
      { path: "cv", component: CvComponent }
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
