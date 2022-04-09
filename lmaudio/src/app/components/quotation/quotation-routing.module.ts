import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "src/app/guard/auth.guard";
import { CustomerFormGuard } from 'src/app/guard/customer-form.guard';

import { ProductFormGuard } from "src/app/guard/product-form.guard";
import { CstDetailsComponent } from './customer-master/cst-details/cst-details.component';
import { CstFormComponent } from './customer-master/cst-form/cst-form.component';
import { CstListComponent } from './customer-master/cst-list/cst-list.component';

import { ProDetailsComponent } from './product-master/pro-details/pro-details.component';
import { ProFormComponent } from './product-master/pro-form/pro-form.component';
import { ProListComponent } from './product-master/pro-list/pro-list.component';
import { QuotFormComponent } from './qutation-master/quot-form/quot-form.component';
import { QuotListComponent } from './qutation-master/quot-list/quot-list.component';


const routes: Routes = [
  { path: '', component: ProListComponent, canActivate: [AuthGuard] },
  { path: 'products/add', component: ProFormComponent, canDeactivate: [ProductFormGuard] },
  { path: 'products/edit/:id', component: ProFormComponent, canDeactivate: [ProductFormGuard] },
  { path: 'products/customer', component:CstFormComponent},
  { path: 'products/customer/edit/:id', component:CstFormComponent},
  { path: 'products/customer/list', component:CstListComponent},
  { path: 'products/detail/:id', component: ProDetailsComponent },
  { path: 'products/qoutation', component:QuotFormComponent},
  { path: 'products/qoutation/list',component:QuotListComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotationRoutingModule { }
