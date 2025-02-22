import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  template: `
    <div class="employee-card">
      <h2>Employee Dashboard</h2>
      <div class="employee-info">
        <p><strong>Name:</strong> hingrajiya Prit</p>
        <p><strong>Position:</strong> Software Developer</p>
        <p><strong>Department:</strong> Engineering</p>
        <p><strong>Employee ID:</strong> EMP001</p>
      </div>
    </div>
  `,
  styles: [`
    .employee-card {
      background-color: #f0f7ff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin: 16px;
    }
    .employee-info {
      margin-top: 16px;
    }
    h2 {
      color: #2c5282;
      margin-bottom: 16px;
    }
    p {
      margin: 8px 0;
      color: #4a5568;
    }
  `]
})
export class EmployeeComponent {
}