import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Это необходимо для работы директивы ngIf
import { CategoryListComponent } from './category-list.component';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule // CommonModule включает директивы ngIf, ngFor и другие
  ],
  exports: [CategoryListComponent] // Экспортируем CategoryListComponent, если он используется в других местах
})
export class CategoryListModule {}
