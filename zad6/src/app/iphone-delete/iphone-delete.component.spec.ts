import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneDeleteComponent } from './iphone-delete.component';

describe('IphoneDeleteComponent', () => {
  let component: IphoneDeleteComponent;
  let fixture: ComponentFixture<IphoneDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
