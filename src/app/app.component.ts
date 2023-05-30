import { Component } from '@angular/core';
import { ProductItem } from './product-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productos: ProductItem[];

  constructor() {
    this.productos = [
      new ProductItem(1, 'Camara', 'Es de 20 megapilxes', 50),
      new ProductItem(2, 'Play5', 'Es de color gris', 400),
      new ProductItem(3, 'Libro', 'El autor es Richard Martin ', 15)
    ];
  }
  /*
  title = 'tienda-online';

  listaProductItems = [1,2,3,4];
  */
}
