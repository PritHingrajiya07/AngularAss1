import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  template: `
    <div class="admin-card">
      <h2>Admin Dashboard</h2>
      <div class="admin-info">
        <p><strong>Admin Level:</strong> Prit Admin</p>
        <p><strong>Access Level:</strong> Full Access</p>
        <p><strong>Last Activity:</strong> 2025-01-15</p>
        <p><strong>System Status:</strong> Online</p>
      </div>
    </div>
  `,
  styles: [`
    .admin-card {
      background-color: #fff0f0;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin: 16px;
    }
    .admin-info {
      margin-top: 16px;
    }
    h2 {
      color: #c53030;
      margin-bottom: 16px;
    }
    p {
      margin: 8px 0;
      color: #4a5568;
    }
  `]
})
export class AdminComponent {
}