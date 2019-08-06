import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerBranchComponent } from './per-branch/per-branch.component';
import { PerProductComponent } from './per-product/per-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LinkProductComponent } from './link-product/link-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PerBranchComponent,
    PerProductComponent,
    AddProductComponent,
    EditProductComponent,
    LinkProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
