import { Injectable } from '@angular/core';
import { ITask } from '../interface/task.interface';
import { TASK_MOCK } from '../mock/task.mock';

@Injectable({
  providedIn: 'root',
})
export class DynamicAPI {
  task: any = TASK_MOCK;

  getTasks(): ITask[] {
    return this.task;
  }

  postTask(newTask: ITask): ITask[] {
    return this.task.push(newTask);
  }
}
