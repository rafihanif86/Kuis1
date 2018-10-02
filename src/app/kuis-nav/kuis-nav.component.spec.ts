import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuisNavComponent } from './kuis-nav.component';

describe('KuisNavComponent', () => {
  let component: KuisNavComponent;
  let fixture: ComponentFixture<KuisNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuisNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuisNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
