import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { QuotationModule } from "./components/quotation/quotation.module";

import { JwtInterceptor } from "./interceptors/jwt.interceptor";
import { CurrencyPipe } from "@angular/common";


//lm-Component
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { GlobalAlertComponent } from './components/shared/global-alert/global-alert.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    GlobalAlertComponent,
    NavbarComponent,
    PageNotFoundComponent,
    
    // -----------

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuotationModule,
   
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:JwtInterceptor,
    multi:true,
    
  },CurrencyPipe

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
