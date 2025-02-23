import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products = [
    {
      name: 'iPhone 16 Pro Max',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      image: 'https://resources.cdn-kaaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'BWS R-Samurai',
      description: 'Скутер BWS R-Samurai черный, серый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/hc8/66214540967966.jpg?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/skuter-bws-r-samurai-chernyi-seryi-107754936/?c=750000000'
    },
    {
      name: 'QAZ Pricep',
      description: 'Автоприцеп открытый QAZ Pricep 002-2013QE50 серый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h42/64382057119774.jpg?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/avtopritsep-otkrytyi-qaz-pricep-002-2013qe50-seryi-104244165/?c=750000000'
    },
    {
      name: 'Ресанта',
      description: 'Стабилизатор напряжения Ресанта АСН-1000/1-Ц',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/he3/63765255815198.jpg?format=gallery-medium',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/stabilizator-naprjazhenija-resanta-asn-1000-1-ts-5400768/?c=750000000'
    },
    {
      name: 'DJI Mini 2 Fly More Combo',
      description: 'Дрон DJI Mini 2 Fly More Combo - это компактный квадрокоптер',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hcd/64060823502878.jpg?format=gallery-medium',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/dji-mini-2-fly-more-combo-seryi-100789420/?c=750000000'
    },
    {
      name: 'Телевизор Samsung',
      description: 'Телевизор Samsung UE43T5300AUXCE 109 см черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000'
    },
    {
      name: 'Хватайка желтый',
      description: 'Хватайка желтый игровой автомат',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h80/hb3/86965339029534.jpg?format=gallery-medium',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/hvataika-zheltyi-122957050/?c=750000000'
    },
    {
      name: 'Кофеварка Vitek',
      description: 'Кофеварка Vitek VT-1514 черный, серебристый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h97/85403189084190.jpg?format=gallery-medium',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/kofevarka-vitek-vt-1514-chernyi-serebristyi-4400478/?c=750000000'
    },
    {
      name: 'Швейная машина',
      description: 'Швейная машина Jack JK-F5 белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/p2d/19828599.jpg?format=gallery-medium',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/jack-jk-f5-belyi-107651742/?c=750000000'
    },
    {
      name: 'Apple AirPods Pro',
      description: 'Наушники Apple AirPods Pro with Lightning белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-with-lightning-belyi-4804718/?c=750000000'
    }
  ];

  share(product: any, platform: 'whatsapp' | 'telegram') {
    let url = platform === 'whatsapp'
      ? `https://api.whatsapp.com/send?text=${encodeURIComponent(product.link)}`
      : `https://t.me/share/url?url=${encodeURIComponent(product.link)}`;

    window.open(url, '_blank');
  }
}
