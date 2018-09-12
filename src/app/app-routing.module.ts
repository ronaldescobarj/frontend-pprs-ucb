import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOneViewComponent } from '../app/form-one-view/form-one-view.component';
import { FormTwoViewComponent } from '../app/form-two-view/form-two-view.component';
import { MainDashboardComponent } from '../app/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainDashboard', pathMatch: 'full' },
  { path: 'mainDashboard', component: MainDashboardComponent },  
  { path: 'formOne', component: FormOneViewComponent },
  { path: 'formTwo', component: FormTwoViewComponent },  
  //{ path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
