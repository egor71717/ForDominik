import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products/:id',
    component: ProductsComponent
  },
  {
    path: 'notFound',
    component : NotFoundComponent
  },
  { 
    path: '**', 
    redirectTo: '/notFound'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
