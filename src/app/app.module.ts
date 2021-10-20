import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListCustomersComponent } from './components/customers/list-customers/list-customers.component';
import { AddCustomersComponent } from './components/customers/add-customers/add-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    FooterComponent,
    ListCustomersComponent,
    AddCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
