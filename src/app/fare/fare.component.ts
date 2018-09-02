import {Component, OnInit} from "@angular/core";
import {Fare} from "./fare";
import {FareService} from "./fare.service";

@Component({
    selector: 'app-fare',
    templateUrl: './fare.component.html',
    styleUrls: ['./fare.component.css']
})
export class FareComponent implements OnInit {

    title = 'Fare Overview';

    fare: Array<Fare>;

    constructor(private fareService: FareService) {
    }

    ngOnInit() {
        this.getFare();
    }

    onSubmit() {

    }

    getFare(): void {
        this.fareService.getFare()
            .subscribe(fare => this.fare = fare);
    }

}
