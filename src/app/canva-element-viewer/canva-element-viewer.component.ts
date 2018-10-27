import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CanvaElement } from 'src/models/canva-element';

@Component({
  selector: 'app-canva-element-viewer',
  templateUrl: './canva-element-viewer.component.html',
  styleUrls: ['./canva-element-viewer.component.scss']
})
export class CanvaElementViewerComponent {
  @Input()
  element: CanvaElement;

  constructor(private sanitizer: DomSanitizer) {}

  getTransform(element: CanvaElement) {
    if (!element) {
      return '';
    }

    const result = this.sanitizer.bypassSecurityTrustStyle(
      `translate(${element.transformX.toFixed(
        2
      )}px, ${element.transformY.toFixed(2)}px) rotate(${element.rotate.toFixed(
        2
      )}deg)`
    );

    return result;
  }
}
