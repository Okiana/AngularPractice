import { Component, OnInit } from '@angular/core';
import { Product } from './entities/product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 product: Product;

  ngOnInit() {
    this.product = {
      id: 'p01',
      name: ' red bokken',
      photo: 'bokken.jpg',
      price: 20,
      quantity: 6
    };
  }
}
