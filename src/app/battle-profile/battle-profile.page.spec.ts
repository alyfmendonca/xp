import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleProfilePage } from './battle-profile.page';

describe('BattleProfilePage', () => {
  let component: BattleProfilePage;
  let fixture: ComponentFixture<BattleProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
