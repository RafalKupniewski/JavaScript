import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneDetailsComponent } from './iphone-details.component';

describe('IphoneDetailsComponent', () => {
  let component: IphoneDetailsComponent;
  let fixture: ComponentFixture<IphoneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
