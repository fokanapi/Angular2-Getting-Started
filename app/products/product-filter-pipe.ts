import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "./product";


@Pipe(
    {
        name: "productFilterPipe"
    }
)
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        var products: IProduct[] = [];

        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        products = filterBy ? value.filter((product) => {
            return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1;
        }) : value;
                
        return products;

    }
}