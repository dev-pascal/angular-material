import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHorizontalComponent } from './menu-horizontal.component';

describe('MenuHorizontalComponent', () => {
  let component: MenuHorizontalComponent;
  let fixture: ComponentFixture<MenuHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuHorizontalComponent]
    });
    fixture = TestBed.createComponent(MenuHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
