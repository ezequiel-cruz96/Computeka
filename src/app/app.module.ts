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

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { environment } from '../enviroment/enviroment'

import { provideFirestore, getFirestore } from '@angular/fire/firestore';


import { AngularFireModule } from '@angular/fire/compat';
import { TableModule } from 'primeng/table';
import { ProductsComponent } from '../components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireModule,
    TableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
