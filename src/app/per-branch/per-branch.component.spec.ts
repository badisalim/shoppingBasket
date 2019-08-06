import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerBranchComponent } from './per-branch.component';

describe('PerBranchComponent', () => {
  let component: PerBranchComponent;
  let fixture: ComponentFixture<PerBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
