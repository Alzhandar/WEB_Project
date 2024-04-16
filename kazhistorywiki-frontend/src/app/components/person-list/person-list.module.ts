import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PersonListComponent],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  exports: [PersonListComponent]
})
export class PersonListModule {}