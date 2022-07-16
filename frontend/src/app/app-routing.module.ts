import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { AppComponent } from './app.component';
import { DetailedViewComponent } from './shared/detailed-view/detailed-view.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'portofolio', component: PortafolioComponent },
  { path: 'detail', component: DetailedViewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
