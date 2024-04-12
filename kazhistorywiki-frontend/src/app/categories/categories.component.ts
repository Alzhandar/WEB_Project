import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.historyService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
