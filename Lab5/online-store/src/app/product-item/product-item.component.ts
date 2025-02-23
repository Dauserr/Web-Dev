import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: { name: string; description: string; image: string; likes: number } = {
    name: '',
    description: '',
    image: '',
    likes: 0
  };


  increaseLikes(): void {
    if (this.product) {
      this.product.likes += 1;
    }
  }

}
