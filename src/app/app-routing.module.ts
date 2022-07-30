import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { NewProductComponent } from './pages/new-product/new-product.component';

const routes: Routes = [
  { path: "", component: ListProductsComponent},
  { path: "products/list", component: ListProductsComponent},
  { path: "products/new", component: NewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
