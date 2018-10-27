import { CanvaDimensions } from './canva-dimensions';
import { CanvaPage } from './canva-page';

export interface CanvaModel {
  title: string;
  dimensions: CanvaDimensions;
  pages: CanvaPage[];
}
