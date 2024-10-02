import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFotterComponent } from './page-fotter.component';

describe('PageFotterComponent', () => {
  let component: PageFotterComponent;
  let fixture: ComponentFixture<PageFotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFotterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
