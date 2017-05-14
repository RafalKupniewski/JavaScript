import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphonItemComponent } from './iphon-item.component';

describe('IphonItemComponent', () => {
  let component: IphonItemComponent;
  let fixture: ComponentFixture<IphonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
