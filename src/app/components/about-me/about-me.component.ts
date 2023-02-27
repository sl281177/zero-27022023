import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public markerOptions: google.maps.MarkerOptions = { animation: google.maps.Animation.BOUNCE };

  constructor() { }

  ngOnInit(): void {
  }

}
