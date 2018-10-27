import { Component, Input } from '@angular/core';
import { CanvaModel } from 'src/models/canva-model';
import { CanvaPage } from 'src/models/canva-page';

@Component({
  selector: 'app-canva-page-viewer',
  templateUrl: './canva-page-viewer.component.html',
  styleUrls: ['./canva-page-viewer.component.scss']
})
export class CanvaPageViewerComponent {
  @Input()
  model: CanvaModel;

  @Input()
  page: CanvaPage;

  constructor() {}

  getWidth() {
    if (!this.page.dimensions) {
      return this.model.dimensions.width;
    }

    if (this.page.dimensions.width) {
      return this.page.dimensions.width;
    }

    return (
      this.page.dimensions.height /
      (this.model.dimensions.height / this.model.dimensions.width)
    );
  }

  getHeight() {
    if (!this.page.dimensions) {
      return this.model.dimensions.height;
    }

    if (this.page.dimensions.height) {
      return this.page.dimensions.height;
    }

    return (
      this.page.dimensions.width /
      (this.model.dimensions.width / this.model.dimensions.height)
    );
  }
}
