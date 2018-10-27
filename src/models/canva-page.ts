import { CanvaBackground } from './canva-background';
import { CanvaDimensions } from './canva-dimensions';
import { CanvaElement } from './canva-element';

export interface CanvaPage {
  background: CanvaBackground;
  elements: CanvaElement[];
  dimensions: CanvaDimensions;
}
