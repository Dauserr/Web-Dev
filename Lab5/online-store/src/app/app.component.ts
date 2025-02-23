import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component'; // Import ProductListComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], // Import the new component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Our Online Shop';
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Furniture' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Game section' }
  ];

  selectedCategory: number | null = null;

  selectCategory(categoryId: number) {
    this.selectedCategory = categoryId;
  }
}
