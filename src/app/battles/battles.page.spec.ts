import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlesPage } from './battles.page';

describe('BattlesPage', () => {
  let component: BattlesPage;
  let fixture: ComponentFixture<BattlesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
