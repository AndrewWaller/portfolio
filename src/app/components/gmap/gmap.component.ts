import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {
  // initial center position for the map
  lat: number = 36.732241;
  lng: number = -119.785547; 
  // google maps zoom level
  zoom: number = 14;

  constructor() { }

  ngOnInit() {}

}
