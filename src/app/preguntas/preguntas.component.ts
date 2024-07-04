import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [RouterOutlet, MaterialModule],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {

  constructor(private router: Router, 
    private route: ActivatedRoute,
  ){

  }

  salir(): void{
    this.router.navigateByUrl("/home")
  }

  irHome():void{
    this.router.navigate(["home"], {relativeTo: this.route})
  }
  irLocation():void{
    this.router.navigate(["location"], {relativeTo: this.route})
  }
  irTodos():void{
    this.router.navigate(["todos"], {relativeTo: this.route})
  }
}