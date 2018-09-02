import {Component, OnInit, Input} from "@angular/core";
import {Location} from "./location";
import {LocationsService} from "./location.service";
import {Fare} from "../fare/fare";

@Component({
    selector: 'app-locations',
    templateUrl: './locations.component.html',
    styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

    title = 'My Favourite Locations Overview';

    @Input() fare: Fare;

    selectedLocation: Location;

    locations: Array<Location>;

    constructor(private locationService: LocationsService) {
    }

    ngOnInit() {
        this.getLocations();
    }

    onSelect(location: Location): void {
        this.selectedLocation = location;

        console.log("selectedLocation: ".concat(JSON.stringify(this.selectedLocation)));
    }

    onSubmit() {

    }

    getLocations(): void {
        this.locationService.getLocations()
            .subscribe(locations => this.locations = locations);
    }

}
