import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NAVBAR_ROUTE_CONFIG } from '../shared/config/navbar.route.config';
import { TaskModal } from '../shared/components/task-modal/task-modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, TaskModal],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  isSidebarOpen = true;
  sideNavbar = NAVBAR_ROUTE_CONFIG;
  date = new Date();
  time = this.date.getHours();
  greeting =
    this.time < 12
      ? 'Good morning'
      : this.time < 18
      ? 'Good afternoon'
      : 'Good evening';

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  dashboardMessage() {
    return `${this.greeting}, welcome to Task Forge!`;
  }
}
