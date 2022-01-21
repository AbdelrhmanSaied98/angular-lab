import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentCliComponent } from './test-component-cli.component';

describe('TestComponentCliComponent', () => {
  let component: TestComponentCliComponent;
  let fixture: ComponentFixture<TestComponentCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
