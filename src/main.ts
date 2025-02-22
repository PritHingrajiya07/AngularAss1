import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EmployeeComponent } from './app/employee/employee.component';
import { UserComponent } from './app/user/user.component';
import { AdminComponent } from './app/admin/admin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeComponent, UserComponent, AdminComponent],
  template: `
    <div class="app-container">
      <h1>Angular Components Demo</h1>
      <div class="components-grid">
        <app-employee></app-employee>
        <app-user></app-user>
        <app-admin></app-admin>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
      color: #2d3748;
      margin-bottom: 32px;
    }
    .components-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
  `]
})
export class App {
}

bootstrapApplication(App);