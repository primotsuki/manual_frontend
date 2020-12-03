import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicadorComponent } from './publicador.component';

describe('PublicadorComponent', () => {
  let component: PublicadorComponent;
  let fixture: ComponentFixture<PublicadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
