import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    templateUrl: 'app.component.html',
    moduleId: module.id,    
    providers:[ProductService]
})
export class AppComponent { 
    pageTitle: string = `Acme Product Management`;
}
