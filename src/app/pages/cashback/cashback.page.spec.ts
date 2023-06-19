import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashbackPage } from './cashback.page';

describe('CashbackPage', () => {
  let component: CashbackPage;
  let fixture: ComponentFixture<CashbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CashbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
