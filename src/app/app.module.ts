import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvocatoriesViewComponent } from './convocatories-view/convocatories-view.component';
import { FormOneViewComponent } from './form-one-view/form-one-view.component';
import { FormTwoViewComponent } from './form-two-view/form-two-view.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FormThreeViewComponent } from './form-three-view/form-three-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvocatoriesViewComponent,
    FormOneViewComponent,
    FormTwoViewComponent,
    MainDashboardComponent,
    FormThreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
