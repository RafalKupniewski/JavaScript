import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IphonComponent } from './iphon.component';

describe('IphonComponent', () => {
  let component: IphonComponent;
  let fixture: ComponentFixture<IphonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IphonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IphonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
