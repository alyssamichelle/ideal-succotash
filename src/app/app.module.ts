import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { StickersComponent } from './stickers/stickers.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

const appRoutes: Routes = [
  {path: 'stickers', component: StickersComponent},
  {path: 't-shirts', component: TShirtsComponent},
  {path: '', redirectTo: '/stickers',
   pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TShirtsComponent,
    StickersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
