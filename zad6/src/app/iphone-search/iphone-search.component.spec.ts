import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneSearchComponent } from './iphone-search.component';

describe('IphoneSearchComponent', () => {
  let component: IphoneSearchComponent;
  let fixture: ComponentFixture<IphoneSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
