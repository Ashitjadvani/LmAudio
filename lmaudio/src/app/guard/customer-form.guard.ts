import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CstFormComponent } from "../components/quotation/customer-master/cst-form/cst-form.component";

@Injectable({
  providedIn: 'root'
})
export class CustomerFormGuard implements CanDeactivate<CstFormComponent> {
  canDeactivate(customerForm: CstFormComponent) {
  if (customerForm.formDirty) {
    return confirm("All changes would be lost. Are you Sure ?")
  }
  return true
  }

}
