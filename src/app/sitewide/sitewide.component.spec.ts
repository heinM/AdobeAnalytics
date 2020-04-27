import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitewideComponent } from './sitewide.component';

describe('SitewideComponent', () => {
  let component: SitewideComponent;
  let fixture: ComponentFixture<SitewideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitewideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitewideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
