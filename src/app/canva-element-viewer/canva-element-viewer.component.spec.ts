import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvaElementViewerComponent } from './canva-element-viewer.component';

describe('CanvaElementViewerComponent', () => {
  let component: CanvaElementViewerComponent;
  let fixture: ComponentFixture<CanvaElementViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvaElementViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvaElementViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
