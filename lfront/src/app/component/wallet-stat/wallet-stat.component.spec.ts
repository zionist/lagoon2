import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletStatComponent } from './wallet-stat.component';

describe('WalletStatComponent', () => {
  let component: WalletStatComponent;
  let fixture: ComponentFixture<WalletStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
