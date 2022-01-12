import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonResultDialogComponent } from './json-result-dialog.component';

describe('JsonResultDialogComponent', () => {
  let component: JsonResultDialogComponent;
  let fixture: ComponentFixture<JsonResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonResultDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
