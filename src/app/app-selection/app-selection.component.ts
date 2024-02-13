import { Component } from '@angular/core';
import { AllAppsService } from '../all-apps.service';
import { App } from '../models/app.model';

@Component({
  selector: 'app-selection',
  templateUrl: './app-selection.component.html',
  styleUrls: ['./app-selection.component.css'],
})
export class AppSelectionComponent {
  allApps: App[] = [];

  constructor(private allAppsService: AllAppsService) {
    this.allAppsService.getApps().subscribe((allApps) => {
      this.allApps = allApps;
    });
  }
}
