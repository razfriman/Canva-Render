import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { CanvaModel } from 'src/models/canva-model';
import { CanvaPage } from 'src/models/canva-page';
import { CanvaElement } from 'src/models/canva-element';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  editorOptions = { theme: 'vs-dark', language: 'json', automaticLayout: true };

  // tslint:disable-next-line:max-line-length
  code = `{\r\n    \"A\": [{\r\n        \"D\": {\r\n            \"B\": {\r\n                \"A\": {\r\n                    \"A\": \"MADFF5KoEmY\",\r\n                    \"B\": 2\r\n                },\r\n                \"B\": {\r\n                    \"A\": -122.50000000000006,\r\n                    \"B\": -5.684341886080802e-14,\r\n                    \"D\": 560.0000000000001,\r\n                    \"C\": 560.0000000000001\r\n                },\r\n                \"E\": 0.01,\r\n                \"C\": {}\r\n            },\r\n            \"C\": \"#5bc9ff\"\r\n        },\r\n        \"E\": [{\r\n            \"A?\": \"K\",\r\n            \"A\": 9.538296732316493,\r\n            \"B\": 3.2907287596861963,\r\n            \"D\": 85.58036804199219,\r\n            \"C\": 38.17143020629883,\r\n            \"E\": -13.618018695296614,\r\n            \"a\": {\r\n                \"A\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": \"LEFT\\n\"\r\n                }],\r\n                \"B\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"B\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"B\": \"start\"\r\n                        }\r\n                    }\r\n                }, {\r\n                    \"A?\": \"B\",\r\n                    \"A\": 5\r\n                }, {\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"A\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"A\": \"start\"\r\n                        }\r\n                    }\r\n                }]\r\n            },\r\n            \"b\": {},\r\n            \"d\": \"A\"\r\n        }, {\r\n            \"A?\": \"K\",\r\n            \"B\": 451.4196319580078,\r\n            \"D\": 108.58036804199219,\r\n            \"C\": 38.17143020629883,\r\n            \"a\": {\r\n                \"A\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": \"RIGHT\\n\"\r\n                }],\r\n                \"B\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"B\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"B\": \"end\"\r\n                        }\r\n                    }\r\n                }, {\r\n                    \"A?\": \"B\",\r\n                    \"A\": 6\r\n                }, {\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"A\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"A\": \"end\"\r\n                        }\r\n                    }\r\n                }]\r\n            },\r\n            \"b\": {},\r\n            \"d\": \"A\"\r\n        }, {\r\n            \"A?\": \"K\",\r\n            \"A\": 275.17143020629885,\r\n            \"D\": 137.5803680419922,\r\n            \"C\": 38.17143020629883,\r\n            \"a\": {\r\n                \"A\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": \"BOTTOM\\n\"\r\n                }],\r\n                \"B\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"B\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"B\": \"start\"\r\n                        }\r\n                    }\r\n                }, {\r\n                    \"A?\": \"B\",\r\n                    \"A\": 7\r\n                }, {\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"A\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"A\": \"start\"\r\n                        }\r\n                    }\r\n                }]\r\n            },\r\n            \"b\": {},\r\n            \"d\": \"A\"\r\n        }, {\r\n            \"A?\": \"K\",\r\n            \"A\": 276,\r\n            \"B\": 268.4196319580078,\r\n            \"D\": 291.5803680419922,\r\n            \"C\": 38.17143020629883,\r\n            \"a\": {\r\n                \"A\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": \"BOTTOM RIGHT\\n\"\r\n                }],\r\n                \"B\": [{\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"B\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"B\": \"start\"\r\n                        }\r\n                    }\r\n                }, {\r\n                    \"A?\": \"B\",\r\n                    \"A\": 13\r\n                }, {\r\n                    \"A?\": \"A\",\r\n                    \"A\": {\r\n                        \"font-size\": {\r\n                            \"A\": \"32\"\r\n                        },\r\n                        \"text-align\": {\r\n                            \"A\": \"start\"\r\n                        }\r\n                    }\r\n                }]\r\n            },\r\n            \"b\": {},\r\n            \"d\": \"A\"\r\n        }],\r\n        \"G\": {\r\n            \"A\": \"MAC7srFQOT8\",\r\n            \"B\": 1\r\n        }\r\n    }],\r\n    \"B\": {\r\n        \"A?\": \"A\",\r\n        \"A\": \"TACQ-vigoPU\",\r\n        \"B\": 1\r\n    },\r\n    \"C\": {\r\n        \"A\": 560,\r\n        \"B\": 315,\r\n        \"C\": \"D\"\r\n    },\r\n    \"D\": \"The Hoedown Under\",\r\n    \"G\": {}\r\n}`;
  // code = '';
  editor: any;
  elements: any[] = [];
  page: CanvaPage;
  model: CanvaModel;

  constructor(
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.codeUpdated();
  }

  onInit(editor) {
    this.editor = editor;
    this.editor.getModel().onDidChangeContent(x => {
      this.codeUpdated();
      this.cdr.detectChanges();
    });
  }

  drawElements(model: CanvaModel) {
    console.log('DRAW');
    console.log(model);

    if (!model && !model.pages && !model.pages.length) {
      this.clearCanvas();
      return;
    }

    const page = model.pages[0];
    this.page = page;
    this.model = model;
    this.elements = page.elements;
  }

  codeUpdated() {
    try {
      const parsed = JSON.parse(this.code);
      const decoded = this.decodeCanva(parsed);
      this.drawElements(decoded);
    } catch (e) {
      this.clearCanvas();
    }
  }

  getTransform(element: CanvaElement) {
    const result = this.sanitizer.bypassSecurityTrustStyle(
      `translate(${element.transformX.toFixed(
        2
      )}px, ${element.transformY.toFixed(2)}px) rotate(${element.rotate.toFixed(
        2
      )}deg)`
    );

    return result;
  }

  clearCanvas() {
    this.elements = [];
    this.model = null;
    this.page = null;
  }

  decodeElements(node: any): CanvaElement[] {
    const elements = [];

    console.log(node);

    node.forEach(element => {
      console.log(element);
      const decodedElement: CanvaElement = {
        type: element['A?'],
        height: element['C'] || 0,
        width: element['D'] || 0,
        transformY: element['A'] || 0,
        transformX: element['B'] || 0,
        rotate: element['E'] || 0,
        children: [],
        properties: {}
      };

      if (decodedElement.type === 'K') {
        // Text box
        decodedElement.text = element.a.A[0].A;

        element.a.B.forEach(prop => {
          if (prop && prop.A) {
            Object.keys(prop.A).forEach(key => {
              decodedElement.properties[key] = prop.A[key].B || prop.A[key].A;
            });
          }
        });
      } else if (decodedElement.type === 'H') {
        // Group
        if (element.c) {
          decodedElement.children = this.decodeElements(element.c);
        }
      } else if (decodedElement.type === 'I') {
        // Image
      }

      elements.push(decodedElement);
    });

    return elements;
  }

  decodeCanva(model) {
    const decoded: CanvaModel = {
      title: model.D,
      dimensions: {
        width: model.C.A,
        height: model.C.B,
        type: model.C.C
      },
      pages: []
    };

    model.A.forEach(page => {
      const decodedPage: CanvaPage = {
        background: {
          color: page.D.C
        },
        elements: []
      };

      decodedPage.elements = this.decodeElements(page.E);
      decoded.pages.push(decodedPage);
    });

    return decoded;
  }
}
