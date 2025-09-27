import { Component } from '@angular/core';

@Component({
  selector: 'app-task-progress',
  imports: [],
  templateUrl: './task-progress.html',
  styleUrl: './task-progress.scss',
})
export class TaskProgress {
  tasks = [
    {
      name: 'Walk the dogs',
      description: 'this is a description for a task',
      time: '2:00',
      location: 'Park',
    },
    {
      name: 'Prayer walk',
      description: 'this is a description for task 2',
      time: '3:00',
      location: 'Beach',
    },
    {
      name: 'Grocery shopping',
      description: 'this is a description for task 3',
      time: '4:00',
      location: 'Supermarket',
    },
  ];

  constructor() {}
}
