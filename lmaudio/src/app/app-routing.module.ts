import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { QuotationComponent } from './components/quotation/quotation.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/product'},
  {
    path:'product',
    component:QuotationComponent,
    loadChildren:()=>import('./components/quotation/quotation.module')
    .then(m=>m.QuotationModule),
    canActivate:[AuthGuard]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
