import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _productUrl = "api/products/products.json";

    constructor(private http: Http) {
    }

    getProducts(): Observable<IProduct[]> {

        return this.http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.errorHandler);
    }

    errorHandler(err: any, caught: Observable<IProduct[]>) {
        console.error(err);
        return Observable.throw(err.json().error || "Server Error");
    }
}