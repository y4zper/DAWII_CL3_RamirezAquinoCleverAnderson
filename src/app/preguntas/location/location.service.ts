import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private url = 'https://rickandmortyapi.com/api/location';

  constructor(private httpClient:HttpClient) { }

  getLocations(): Observable<Location[]>{

    return this.httpClient.get<{info:any, results:Location[]}>(this.url)
    .pipe(map(response => response.results.filter(location => location.type === "Planet")));
  }
}
