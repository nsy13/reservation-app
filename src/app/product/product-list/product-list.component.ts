import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.servise';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products;
  constructor(private ps: ProductService) { }
  
  ngOnInit() {
    const productsObservable = this.ps.getProducts()
    productsObservable.subscribe(
      (data) => { 
        this.products = data
      },
      (err) => { console.log('error')}
    )
  }

}
