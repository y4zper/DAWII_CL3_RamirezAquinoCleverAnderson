import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})


export class TodosService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient:HttpClient) { }

  getTodos(): Observable<Todos[]>{

    return this.httpClient.get<Todos[]>(this.url)
    .pipe(map(response => response.filter(todos => todos.id >= 25 && todos.id <= 90 && todos.completed)));
  }
  
}
  