import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAgenciesComponent } from './ListAgencies.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule
  ],

  declarations: [ListAgenciesComponent]
})
export class ListAgenciesModule {}
