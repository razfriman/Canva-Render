import { CanvaElement } from './canva-element';
import { CanvaBackground } from './canva-background';

export interface CanvaPage {
  background: CanvaBackground;
  elements: CanvaElement[];
}
