import { Component, OnInit } from '@angular/core';
import { DynamicAPI } from '../../shared/services/dynamic-api';
import { ITask } from '../../shared/interface/task.interface';

@Component({
  selector: 'app-task-progress',
  imports: [],
  templateUrl: './task-progress.html',
  styleUrl: './task-progress.scss',
})
export class TaskProgress implements OnInit {
  tasks: ITask[] = [];

  constructor(private service: DynamicAPI) {}

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
  }

  getTasks() {
    this.tasks = this.service.getTasks();
  }

  deleteTask(task: any) {
    this.service.deleteTask(task);
    this.tasks = this.service.getTasks();
  }
}
