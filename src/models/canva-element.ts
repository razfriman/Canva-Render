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

}
