import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
    this.progress = Math.max(0, Math.min(100, this.progress));
  }

}
