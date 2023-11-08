import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { ProductsComponent } from 'src/components/products/products.component';
import { DetailComponent } from 'src/components/detail/detail.component';
import { HelpviewComponent } from 'src/components/helpview/helpview.component';
import { UsviewComponent } from 'src/components/usview/usview.component';
import { CartComponent } from 'src/components/cart/cart.component';
import { LogoutComponent } from 'src/components/logout/logout.component';

const routes: Routes = [
  {path:'productos',component:ProductsComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'ayuda',component:HelpviewComponent},
  {path:'nosotros',component:UsviewComponent},
  {path:'carrito',component:CartComponent},
  {path:'logout',component:LogoutComponent},
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
