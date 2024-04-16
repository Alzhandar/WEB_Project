import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule, 
    HttpClientModule 
  ],
  exports: [CategoryListComponent] 
})
export class CategoryListModule {}
