import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any = [1, 2, 3, 4]
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => {
        this.products = data
        console.log('次のデータが出力されました：' + data) 
      },
      (err) => {
        console.error('次のデータが発生しました：' + err) 
      }
    )

  }

}
