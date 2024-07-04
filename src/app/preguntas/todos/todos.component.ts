import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { TodosService } from './todos.service';
import { CommonModule } from '@angular/common';
import { Todos } from './todos';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todoss: Todos[] = [];
  displayColumns: string [] = ['userId', 'id', 'title', 'completed']

  constructor(private TodosService:TodosService){
  }

  ngOnInit(): void {
    this.TodosService.getTodos().subscribe(data => {
      console.log(data)
      this.todoss = data;
    });
  }

}
