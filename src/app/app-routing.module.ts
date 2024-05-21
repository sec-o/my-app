import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFinderAppComponent } from './product-finder-app/product-finder-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatbotAppComponent } from './chatbot-app/chatbot-app.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-finder-app', component: ProductFinderAppComponent },
  { path: 'product/:id/:name', component: ProductDetailsComponent },
  // If you set : beforehand, it will be declared as a parameter to the router so that you can get the dynamic information after routing to it
  { path: 'chatbot-app', component: ChatbotAppComponent },
  { path: 'qr-code-generator-app', component: QrCodeGeneratorComponent },
  { path: 'todo-app', component: TodoAppComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router) {
    const hashPath = window.location.hash.substr(1);
    if (hashPath) {
      router.navigateByUrl(hashPath);
    }
  }
}
