import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PerBranchComponent } from './per-branch/per-branch.component';
import { PerProductComponent } from './per-product/per-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LinkProductComponent } from './link-product/link-product.component';


const routes: Routes = [

  {
    path: 'app-component',
    component: AppComponent
  },

{
  path: 'per-branch',
  component: PerBranchComponent,
},

{
  path: 'per-product',
component: PerProductComponent
},

{
path: 'add-product',
component: AddProductComponent
},

{
  path: 'edit-product/:id',
  component: EditProductComponent
},

{
  path: 'link-product',
  component: LinkProductComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
