import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from 'src/components/footer/footer.component';
import { ToastModule } from 'primeng/toast';


import { TableModule } from 'primeng/table';
import { ProductsComponent } from '../components/products/products.component';
import { DetailComponent } from 'src/components/detail/detail.component';
import { HelpviewComponent } from 'src/components/helpview/helpview.component';
import { UsviewComponent } from 'src/components/usview/usview.component';
import { CartComponent } from '../components/cart/cart.component';

import { MessageService } from 'primeng/api';
import { LogoutComponent } from 'src/components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    DetailComponent,
    HelpviewComponent,
    UsviewComponent,
    CartComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    TableModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
