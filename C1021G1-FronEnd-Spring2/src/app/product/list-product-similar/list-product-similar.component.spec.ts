import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductSimilarComponent } from './list-product-similar.component';

describe('ListProductSimilarComponent', () => {
  let component: ListProductSimilarComponent;
  let fixture: ComponentFixture<ListProductSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
