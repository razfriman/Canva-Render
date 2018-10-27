import { CanvaDimensions } from './canva-dimensions';

export interface CanvaElement {
  width: number;
  height: number;
  transformX: number;
  transformY: number;
  rotate: number;
  children: CanvaElement[];
  type: string;

  // Text box
  text?: string;
  properties: { [key: string]: any };

  // Image
  imageUrl?: string;
  imageUrlIndex?: string;
  imageDimensions?: CanvaDimensions;
}
