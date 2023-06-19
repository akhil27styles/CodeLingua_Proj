import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTranslateComponent } from './code-translate.component';

describe('CodeTranslateComponent', () => {
  let component: CodeTranslateComponent;
  let fixture: ComponentFixture<CodeTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeTranslateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
