import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeleted } from './task-deleted';

describe('TaskDeleted', () => {
  let component: TaskDeleted;
  let fixture: ComponentFixture<TaskDeleted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDeleted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDeleted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
