import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { DetailedViewComponent } from './shared/detailed-view/detailed-view.component';
import { PortafolioHeaderComponent } from './portafolio/portfolio-body/portfolio-body.component';
import { PersonalInfoComponent } from './portafolio/personal-info/personal-info.component';
import { PortafolioProjectsComponent } from './portafolio/portfolio-body/portafolio-projects/portafolio-projects.component';
import { ModalComponent } from './shared/modal/modal.component';
import { PortfolioInfoComponent } from './portafolio/portfolio-body/portfolio-info/portfolio-info.component';
import { PortfolioContactComponent } from './portafolio/portfolio-body/portfolio-contact/portfolio-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    DetailedViewComponent,
    PortafolioHeaderComponent,
    PersonalInfoComponent,
    PortafolioProjectsComponent,
    ModalComponent,
    PortfolioInfoComponent,
    PortfolioContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
