import { Component, Input, OnInit } from '@angular/core';
import { CanvaModel } from 'src/models/canva-model';
import { CanvaPage } from 'src/models/canva-page';

@Component({
  selector: 'app-canva-page-viewer',
  templateUrl: './canva-page-viewer.component.html',
  styleUrls: ['./canva-page-viewer.component.scss']
})
export class CanvaPageViewerComponent implements OnInit {
  @Input()
  model: CanvaModel;

  @Input()
  page: CanvaPage;

  constructor() {}

  ngOnInit() {}
}
