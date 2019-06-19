import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeDiaryPageComponent } from './life-diary-page.component';

describe('LifeDiaryPageComponent', () => {
  let component: LifeDiaryPageComponent;
  let fixture: ComponentFixture<LifeDiaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeDiaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeDiaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
