import { Component, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component'; // Import the ProductItemComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() categoryId: number | null = null; // Input property
  products: { [categoryId: number]: { name: string; description: string; image: string; likes: number }[] } = {
    1: [
      { name: 'Apple iPhone 16 Pro Max 256Gb', description: 'Apple iPhone 16 Pro Max 256GB черный', image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium', likes: 0 },
      { name: 'Samsung Galaxy S25 Ultra 12GB/1024GB', description: 'Смартфон Samsung Galaxy S25 Ultra 12 ГБ/1024 ГБ темно-черный', image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/pcf/20117665.png?format=gallery-medium', likes: 0 },
      { name: 'Xiaomi Redmi Note 12 Pro', description: 'Xiaomi Redmi Note 12 Pro 128GB', image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hcb/79755720294430.jpg?format=gallery-medium', likes: 0 },
      { name: 'Poco X6 Pro', description: 'Смартфон Poco X6 Pro 12 ГБ/512 ГБ серый + подарок', image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hcc/85857441284126.jpg?format=gallery-medium', likes: 0 },
      { name: 'Oppo Reno 8T 5G', description: 'Oppo Reno 8T 5G 256GB, черный', image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h94/81315506192414.jpg?format=gallery-medium', likes: 0 },
    ],
    2: [
      { name: 'Elegante', description: 'Elegante диван угловой Elegante sofa, обивка ткань, 103х300х160 см, бежевый', image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/p1e/6979041.png?format=gallery-medium', likes: 0 },
      { name: 'Dining Table', description: 'Стол консоль-трансформер HOME.TABLE.KZ Loft, 400x100x75 см, ЛДСП', image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h58/86200288051230.png?format=gallery-medium', likes: 0 },
      { name: 'Hara Chair DOCTOR', description: 'Компьютерное кресло Hara Chair DOCTOR, черный', image: 'https://resources.cdn-kaspi.kz/img/m/p/ccf/283/789e0a0344b545eb87ad09808c3e442b.jpg?format=gallery-medium', likes: 0 },
      { name: 'TV Stand', description: 'ТВ-тумба напольная Modern New Design TT, 180x40x35 см, белый, коричневый', image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=gallery-medium', likes: 0 },
      { name: 'King Size Bed', description: 'Кровать Mod Beds Полосы двуспальная, 160x200 см (с матрасом, без подъёмного механизма) светло серый', image: 'https://resources.cdn-kaspi.kz/img/m/p/hfd/h7b/84983882711070.jpg?format=gallery-medium', likes: 0 },
    ],
    3: [
      { name: 'Kitchen Blender Philips', description: 'Блендер Philips для кухни', image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/hdb/63792599597086.jpg?format=gallery-medium', likes: 0 },
      { name: 'Coffee Machine DeLonghi', description: 'Кофеварка DeLonghi для дома', image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h42/85400362942494.jpg?format=gallery-medium', likes: 0 },
      { name: 'Air Purifier Xiaomi', description: 'Очиститель воздуха Xiaomi', image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hc3/85805589626910.png?format=gallery-medium', likes: 0 },
      { name: 'Electric Kettle Xiaomi', description: 'Электрический чайник Xiaomi', image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/hb6/84932521230366.png?format=gallery-medium', likes: 0 },
      { name: 'Microwave Oven LG', description: 'Микроволновая печь LG', image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h60/63757616578590.jpg?format=gallery-medium', likes: 0 },
    ],
    4: [
      { name: 'Sony PlayStation 5', description: 'Консоль Sony PlayStation 5', image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium', likes: 0 },
      { name: 'Xbox Series X', description: 'Игровая консоль Xbox Series X', image: 'https://resources.cdn-kaspi.kz/img/m/p/p30/pe1/12631853.png?format=gallery-medium', likes: 0 },
      { name: 'Nintendo Switch OLED', description: 'Игровая консоль Nintendo Switch OLED', image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h4c/64191552651294.jpg?format=gallery-medium', likes: 0 },
      { name: 'Gaming Headset SteelSeries', description: 'Гарнитура SteelSeries для игр', image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h7e/87130160562206.jpg?format=gallery-medium', likes: 0 },
      { name: 'Gaming Mouse Razer', description: 'Игровая мышь Razer', image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/h9a/64000853966878.jpg?format=gallery-medium', likes: 0 },
    ]
  };
  getCategoryProducts(): { name: string; description: string; image: string; likes: number }[] {
    return this.products[this.categoryId ?? 0]; // Default to category 0 if no categoryId is selected
  }
  removeProduct(product: { name: string; description: string; image: string; likes: number }): void {
    const categoryProducts = this.products[this.categoryId ?? 0];
    const index = categoryProducts.indexOf(product);
    if (index >= 0) {
      categoryProducts.splice(index, 1); // Remove the product from the list
    }
  }
}
