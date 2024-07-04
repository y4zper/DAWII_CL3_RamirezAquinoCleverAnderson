import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { LocationService } from './location.service';
import { CommonModule } from '@angular/common';
import { Location } from './location';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

  locations: Location[] = [];

  constructor(private LocationService:LocationService){
  }

  ngOnInit(): void {
    this.LocationService.getLocations().subscribe(data => {
      console.log(data)
      this.locations = data;
    });
  }

}
