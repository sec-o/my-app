import { Injectable } from '@angular/core';
import { App } from './models/app.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllAppsService {
  private apps: App[] = [
    {
      name: 'Product-Finder',
      icon: 'category',
      path: 'product-finder-app',
    },
    {
      name: 'Chatbot',
      icon: 'smart_toy',
      path: 'chatbot-app',
    },
    {
      name: 'QR-Code Generator',
      icon: 'qr_code',
      path: 'qr-code-generator-app',
    },
    {
      name: 'Todo',
      icon: 'list_alt',
      path: 'todo-app',
    },
  ];

  getApps(): Observable<App[]> {
    return of(this.apps);
  }
}
