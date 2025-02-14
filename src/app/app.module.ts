import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {ProdutFilterPipe} from './products/product-filter.pipe';
import {StarComponent} from './shared/star.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
    ProductListComponent,
      ProdutFilterPipe,
    StarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
