import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from '../messages/message.service';

import { Location } from './location';

import { LOCATIONS } from '../mock-locations';

const httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private locationsUrl = 'http://localhost:9000/travel/autosuggest/cities';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getLocations(): Observable<Location[]> {
    let httpRequest: Observable<Location[]>;
    let httpResponse: Observable<Location[]>;

    let response: Object;
    let error: Object;

    httpRequest = this.http.get<Location[]>(this.locationsUrl, httpHeaders);
    /*httpRequest.subscribe(
        response => {
            console.log("response: ", response);
        },
        error => {
            console.error("error: ", error);
        });*/

      httpResponse = httpRequest.pipe(tap(locations => {
          console.log("locations: ", locations);
          const msg = (locations !== null) ? `fetched` : `did not find`;
          this.log(`locations ${msg}`);
        },
        error => {
          console.error("error: ", error);
        }
      ), catchError(this.handleError<Location[]>('retrieveAirport', []))
    );
    httpResponse = null;
    return httpResponse !== null ? httpResponse : of(LOCATIONS);
    /*return httpResponse;*/
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error("error: ", error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`LocationService: ${message}`);
    console.log("message: ", message);
  }
}
