import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ProductsComponent } from 'src/components/products/products.component';
import { DetailComponent } from 'src/components/detail/detail.component';
import { HelpviewComponent } from 'src/components/helpview/helpview.component';
import { UsviewComponent } from 'src/components/usview/usview.component';
import { CartComponent } from 'src/components/cart/cart.component';
import { LoginComponent } from 'src/components/login/login.component';

const routes: Routes = [
  {path:'productos',component:ProductsComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'ayuda',component:HelpviewComponent},
  {path:'nosotros',component:UsviewComponent},
  {path:'carrito',component:CartComponent},
  {path:'**',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
