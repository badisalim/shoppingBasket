import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkProductComponent } from './link-product.component';

describe('LinkProductComponent', () => {
  let component: LinkProductComponent;
  let fixture: ComponentFixture<LinkProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
