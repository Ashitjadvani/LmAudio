import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { QuotationComponent } from './quotation.component';
import { CstDetailsComponent } from './customer-master/cst-details/cst-details.component';
import { CstFormComponent } from './customer-master/cst-form/cst-form.component';
import { CstListComponent } from './customer-master/cst-list/cst-list.component';
import { ProDetailsComponent } from './product-master/pro-details/pro-details.component';
import { ProFormComponent } from './product-master/pro-form/pro-form.component';
import { ProListComponent } from './product-master/pro-list/pro-list.component';
import { QuotDetailsComponent } from './qutation-master/quot-details/quot-details.component';
import { QuotFormComponent } from './qutation-master/quot-form/quot-form.component';
import { QuotListComponent } from './qutation-master/quot-list/quot-list.component';
import { ProItemComponent } from './product-master/pro-list/pro-item/pro-item.component';
import { HighlightDirective } from './directives/highlight.directive';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { QuotationRoutingModule } from './quotation-routing.module';
import { CstItemComponent } from './customer-master/cst-list/cst-item/cst-item.component';
import { NgxBootstrapIconsModule,allIcons } from 'ngx-bootstrap-icons';
import { QuotItemComponent } from './qutation-master/quot-list/quot-item/quot-item.component';




@NgModule({
  declarations: [
    QuotationComponent,
    CstDetailsComponent,
    CstFormComponent,
    CstListComponent,
    ProDetailsComponent,
    ProFormComponent,
    ProListComponent,
    QuotDetailsComponent,
    QuotFormComponent,
    QuotListComponent,
    ProItemComponent,
    HighlightDirective,
    MyUppercasePipe,
    SearchPipe,
    CstItemComponent,
    QuotItemComponent
  ],
  imports: [
    
    CommonModule,
    FormsModule,
    QuotationRoutingModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    

  ],
  exports:[
    QuotationComponent
  ]
})
export class QuotationModule { }
