import { CanvaDimensions } from './canva-dimensions';
import { CanvaSvgInfo } from './canva-svg-info';

export interface CanvaElement {
  width: number;
  height: number;
  transformX: number;
  transformY: number;
  rotate: number;
  opacity: number;
  children: CanvaElement[];
  type: string;

  // Text box
  text?: string;
  properties: { [key: string]: any };

  // Image
  imageUrl?: string;
  imageUrlIndex?: string;
  imageDimensions?: CanvaDimensions;
  isSvg?: boolean;
  fillColor?: string;

  // Svg
  svgData?: CanvaSvgInfo;
}
