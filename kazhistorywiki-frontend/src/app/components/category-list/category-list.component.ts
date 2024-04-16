import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  navigateToCategory(categoryId?: number) {
    if (categoryId !== undefined) {
      this.router.navigate(['/categories', categoryId, 'persons']);
    }
  }
  
}
