import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbardComponent } from './component/navbard/navbard.component';
import { SearchComponent } from './component/search/search.component';
import { SlideComponent } from './component/slide/slide.component';
import { ProductComponent } from './component/product/product.component';
import { FootersComponent } from './component/footers/footers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbardComponent,
    SearchComponent,
    SlideComponent,
    ProductComponent,
    FootersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
