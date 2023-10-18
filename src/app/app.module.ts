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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
