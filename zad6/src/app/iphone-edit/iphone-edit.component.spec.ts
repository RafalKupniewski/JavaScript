import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneEditComponent } from './iphone-edit.component';

describe('IphoneEditComponent', () => {
  let component: IphoneEditComponent;
  let fixture: ComponentFixture<IphoneEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphoneEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphoneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
