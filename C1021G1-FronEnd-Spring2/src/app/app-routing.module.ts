import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodyComponent} from "./layout/body/body.component";
import {ProductComponent} from "./product/product.component";
import {CreateProductComponent} from "./product/create-product/create-product.component";
import {CategoryComponent} from "./product/category/category.component";
import {ListProductSimilarComponent} from "./product/list-product-similar/list-product-similar.component";
import {ProfileComponent} from "./product/profile/profile.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";


const routes: Routes = [
  // {path: 'new', loadChildren: () => import ('./new/new.module').then(module => module.NewModule)},
  {path:'home',component:BodyComponent},
  {path:'create',component:CreateProductComponent},
  {path:'product',component:ProductComponent},
  {path:'similar/:id',component:ListProductSimilarComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'category',component:CategoryComponent},
  {
    path : 'update/:id', component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
