import { Injectable } from '@angular/core';
import { ITask } from '../interface/task.interface';
import { TASK_MOCK } from '../mock/task.mock';

@Injectable({
  providedIn: 'root',
})
export class DynamicAPI {
  task: ITask[] = TASK_MOCK;

  getTasks(): ITask[] {
    return this.task;
  }

  postTask(newTask: ITask) {
    this.task.push(newTask);
  }

  deleteTask(deleteTask: ITask) {
    this.task = this.getTasks().filter(
      (task: ITask) => task.id !== deleteTask.id
    );
    return this.task;
  }
}
