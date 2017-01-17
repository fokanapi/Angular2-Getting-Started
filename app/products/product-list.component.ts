import {
    Component,
    OnInit,
    OnChanges,
    OnDestroy
} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
    pageTitle: string = "Product List";
    imageMargin: number = 2;
    imageHeight: number = 25;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];

    constructor(private _productService: ProductService) { }

    ngOnInit(): void {
        this._productService.getProducts().subscribe((products) => this.products = products);
    }

    ngOnChanges(): void {
        console.log("On changes");
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onStarRatingClicked(value: string): void {
        this.pageTitle = `Product List: ${value}`;
    }
}