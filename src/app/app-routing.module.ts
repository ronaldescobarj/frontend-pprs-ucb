import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneViewComponent } from '../app/form-one-view/form-one-view.component';
import { FormTwoViewComponent } from '../app/form-two-view/form-two-view.component';
import { MainDashboardComponent } from '../app/main-dashboard/main-dashboard.component';
import { FormThreeViewComponent } from './form-three-view/form-three-view.component';
import { FormFourViewComponent } from './form-four-view/form-four-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainDashboard', pathMatch: 'full' },
  { path: 'mainDashboard', component: MainDashboardComponent },
  { path: 'formOne', component: FormOneViewComponent },
  { path: 'formTwo', component: FormTwoViewComponent },
  { path: 'formThree', component: FormThreeViewComponent },
  { path: 'formFour', component: FormFourViewComponent },
  //{ path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
