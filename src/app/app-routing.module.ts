import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ProductsComponent } from 'src/components/products/products.component';
import { DetailComponent } from 'src/components/detail/detail.component';

const routes: Routes = [
  {path:'productos',component:ProductsComponent},
  {path:'productos/:id',component:DetailComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
