import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsfeedsComponent } from './wsfeeds.component';

describe('WsfeedsComponent', () => {
  let component: WsfeedsComponent;
  let fixture: ComponentFixture<WsfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
