import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrineRoutingModule } from './vitrine-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    VitrineRoutingModule
  ]
})
export class VitrineModule { }
