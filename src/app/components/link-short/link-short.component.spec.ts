import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShortComponent } from './link-short.component';

describe('LinkShortComponent', () => {
  let component: LinkShortComponent;
  let fixture: ComponentFixture<LinkShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
