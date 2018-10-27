import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaViewerComponent } from './canva-viewer.component';

describe('CanvaViewerComponent', () => {
  let component: CanvaViewerComponent;
  let fixture: ComponentFixture<CanvaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvaViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
