import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrComponentComponent } from './err-component.component';

describe('ErrComponentComponent', () => {
  let component: ErrComponentComponent;
  let fixture: ComponentFixture<ErrComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
