import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SevicesComponent } from './components/sevices/sevices.component';

const routes: Routes = [
  {path:'', component:AdminDashboardComponent, children:[
    {path:'home', component: HomeComponent},
    {path:'services', component: SevicesComponent},
    {path: '', redirectTo: '/admin/home', pathMatch:'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
