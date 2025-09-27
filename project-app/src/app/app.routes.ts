import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'in-progress',
    loadComponent: () =>
      import('../app/task-progress/task-progress').then((m) => m.TaskProgress),
  },
  {
    path: 'completed',
    loadComponent: () =>
      import('../app/task-completed/task-completed').then(
        (m) => m.TaskCompleted
      ),
  },
  {
    path: 'deleted',
    loadComponent: () =>
      import('../app/task-deleted/task-deleted').then((m) => m.TaskDeleted),
  },
  {
    path: '**',
    redirectTo: 'in-progress',
    pathMatch: 'full',
  },
];
