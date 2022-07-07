import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkGetComponent } from './link-get.component';

describe('LinkGetComponent', () => {
  let component: LinkGetComponent;
  let fixture: ComponentFixture<LinkGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
