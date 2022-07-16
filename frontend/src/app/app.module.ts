import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { DetailedViewComponent } from './shared/detailed-view/detailed-view.component';
import { PortafolioHeaderComponent } from './portafolio/portafolio-header/portafolio-header.component';
import { PersonalInfoComponent } from './portafolio/personal-info/personal-info.component';
import { PortafolioProjectsComponent } from './portafolio/portafolio-header/portafolio-projects/portafolio-projects.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    PortafolioComponent,
    DetailedViewComponent,
    PortafolioHeaderComponent,
    PersonalInfoComponent,
    PortafolioProjectsComponent,
    ModalComponent,
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
