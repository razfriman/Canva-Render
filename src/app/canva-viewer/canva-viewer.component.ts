import { Component, Input, OnInit } from '@angular/core';
import { CanvaModel } from 'src/models/canva-model';

@Component({
  selector: 'app-canva-viewer',
  templateUrl: './canva-viewer.component.html',
  styleUrls: ['./canva-viewer.component.scss']
})
export class CanvaViewerComponent implements OnInit {
  @Input()
  model: CanvaModel;

  scale = 0.5;

  zoomIn() {
    this.scale += 0.25;
  }

  zoomOut() {
    this.scale -= 0.25;
  }
  actualSize() {
    this.scale = 1.0;
  }

  constructor() {}

  ngOnInit() {}
}
