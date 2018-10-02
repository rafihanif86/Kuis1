import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuisFormComponent } from './kuis-form.component';

describe('KuisFormComponent', () => {
  let component: KuisFormComponent;
  let fixture: ComponentFixture<KuisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
