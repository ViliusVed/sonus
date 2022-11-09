import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  { path: 'login', component: XyzComponent },
  { path: 'admin',
  canActivate:[AuthGuard],
  loadChildren : () => import('./modules/admin/admin.module').then((m)=> m.AdminModule) },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
