import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <div class="user-card">
      <h2>User Profile</h2>
      <div class="user-info">
        <p><strong>Username:</strong> Prit Hingrajiya</p>
        <p><strong>Email:</strong> user&#64;example.com</p>
        <p><strong>Last Login:</strong> 2025-01-15</p>
        <p><strong>Status:</strong> Active</p>
      </div>
    </div>
  `,
  styles: [`
    .user-card {
      background-color: #f0fff4;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin: 16px;
    }
    .user-info {
      margin-top: 16px;
    }
    h2 {
      color: #276749;
      margin-bottom: 16px;
    }
    p {
      margin: 8px 0;
      color: #4a5568;
    }
  `]
})
export class UserComponent {
}