import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { PersonalInfoState } from './core/state/personal-info.state';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { IntroComponent } from './portfolio/intro/intro.component';
import { InfoComponent } from './portfolio/info/info.component';
import { SkillsComponent } from './portfolio/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    InfoComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([PersonalInfoState]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    FontAwesomeModule,

    // Added by "ng add @angular/fire" command
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
