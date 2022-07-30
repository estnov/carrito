import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(private router: Router, private productService: ProductosService) { }

  product: Product = new Product();

  ngOnInit(): void {
  }

  goListProductos(){
    this.router.navigate(['products/list']);
  }

  save(){
    this.productService.saveProduct(this.product);
    this.product = new Product();
  }
}
