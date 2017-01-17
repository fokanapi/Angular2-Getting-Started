import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {

    }

    ngOnInit() {
        let productId =this.activatedRoute.snapshot.params["id"];
        console.log(productId);
        //this.productService.getProducts();
    }
}