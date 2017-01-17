import {
    Component, OnInit, OnChanges, Input, Output,
    EventEmitter
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'starComponent',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']

})
export class StarComponent implements OnInit, OnChanges {
    constructor() { }
    starWidth: number;
    @Input() rating: number = 4;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnInit() { }

    ngOnChanges() {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {        
        this.ratingClicked.emit(`This rating ${this.rating} was clicked`);
    }
}