import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';

const MaterialModules = [
  MatFormFieldModule,
  MatSliderModule,
  MatPaginatorModule,
];

import {NgxDatatableModule} from '@swimlane/ngx-datatable';


import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IndexComponent} from './index/index.component';
import {RootComponent} from './root/root.component';
import {ElementComponents} from './elements/elements.component';


@NgModule({
  declarations: [
    RootComponent,
    IndexComponent,
    RootComponent,
    ...ElementComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialModules,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {
}
