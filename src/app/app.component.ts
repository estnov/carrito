import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carrito';

  products: any;

  constructor(private productService: ProductosService){
    this.products=this.productService.getProducts();  
  }
}
