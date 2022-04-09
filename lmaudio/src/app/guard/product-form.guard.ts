import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanDeactivate, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProFormComponent } from '../components/quotation/product-master/pro-form/pro-form.component';

@Injectable({
  providedIn: 'root'
})
export class ProductFormGuard implements CanDeactivate<ProFormComponent> {
  canDeactivate(productForm: ProFormComponent) {
    if (productForm.formDirty) {
      return confirm('All Changes would be lost. Are you sure ?')
    }

    return true;
  }
}

