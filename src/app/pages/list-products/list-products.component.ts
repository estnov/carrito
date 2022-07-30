import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products : any;
  constructor(private router: Router,
    private productService: ProductosService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  goNewProduct(){
    this.router.navigate(['products/new']);
  }
}
