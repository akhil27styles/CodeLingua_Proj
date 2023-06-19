import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMigrationComponent } from './code-migration.component';

describe('CodeMigrationComponent', () => {
  let component: CodeMigrationComponent;
  let fixture: ComponentFixture<CodeMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeMigrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
