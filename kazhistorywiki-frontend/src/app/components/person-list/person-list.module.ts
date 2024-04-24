import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
import Swiper from "swiper/swiper-element";


// register Swiper custom elements
register();
@NgModule({
  declarations: [PersonListComponent],
  imports: [
    CommonModule,
    HttpClientModule 
  ],
  exports: [PersonListComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonListModule {}