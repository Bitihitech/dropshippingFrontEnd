import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./layout/body/body.component";
import {ListCarComponent} from "./car/list-car/list-car.component";
import {CreateCarComponent} from "./car/create-car/create-car.component";
import {ProductComponent} from "./product/product.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {CategoryComponent} from "./product/category/category.component";


const routes: Routes = [
  // {path: 'new', loadChildren: () => import ('./new/new.module').then(module => module.NewModule)},
  {path:'home',component:BodyComponent},
  {path:'create',component:CreateProductComponent},
  {path:'product',component:ProductComponent},
  {path:'category',component:CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
