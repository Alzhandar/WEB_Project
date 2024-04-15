import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
      }
    });
  }
}
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Это необходимо для работы директивы ngIf
// import { CategoryListComponent } from './category-list.component';

// @NgModule({
//   declarations: [CategoryListComponent],
//   imports: [
//     CommonModule // CommonModule включает директивы ngIf, ngFor и другие
//   ],
//   exports: [CategoryListComponent] // Экспортируем CategoryListComponent, если он используется в других местах
// })
// export class CategoryListModule {}
