import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from '../messages/message.service';

import { Fare } from './fare';

import { FARE } from '../mock-fare';

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
export class FareService {

  private fareUrl = 'http://localhost:9000/travel/search';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getFare(): Observable<Fare[]> {
    let httpRequest: Observable<Fare[]>;
    let httpResponse: Observable<Fare[]>;

    let response: Object;
    let error: Object;

    httpRequest = this.http.get<Fare[]>(this.fareUrl, httpHeaders);
    /*httpRequest.subscribe(
        response => {
            console.log("response: ", response);
        },
        error => {
            console.error("error: ", error);
        });*/

      httpResponse = httpRequest.pipe(tap(fare => {
          console.log("fare: ", fare);
          const msg = (fare !== null) ? `fetched` : `did not find`;
          this.log(`fare ${msg}`);
        },
        error => {
          console.error("error: ", error);
        }
      ), catchError(this.handleError<Fare[]>('retrieveFare', []))
    );
    httpResponse = null;
    return httpResponse !== null ? httpResponse : of(FARE);
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
    this.messageService.add(`FareService: ${message}`);
    console.log("message: ", message);
  }
}
