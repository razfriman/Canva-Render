import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaPageViewerComponent } from './canva-page-viewer.component';

describe('CanvaPageViewerComponent', () => {
  let component: CanvaPageViewerComponent;
  let fixture: ComponentFixture<CanvaPageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvaPageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvaPageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
