import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

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

import {ElementTableComponent} from './elements/table/table.component';

const ElementComponents = [
  ElementTableComponent,
];
import {DockerService} from './services/docker.service';

const Services = [
  DockerService,
];

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
    HttpClientModule,
    ...MaterialModules,
    NgxDatatableModule
  ],
  providers: [
    ...Services,
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
