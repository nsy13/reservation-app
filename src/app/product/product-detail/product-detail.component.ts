import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.servise';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private ps: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productObservable = this.ps.getProductById(params.get('productId'))
      productObservable.subscribe(
        (data) => {
          this.product = data
        },
        (err) => {

        }
      )
    })
  }

}
