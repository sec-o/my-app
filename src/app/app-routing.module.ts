import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFinderAppComponent } from './product-finder-app/product-finder-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatbotAppComponent } from './chatbot-app/chatbot-app.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-finder-app', component: ProductFinderAppComponent },
  { path: 'chatbot-app', component: ChatbotAppComponent },
  { path: 'qr-code-generator-app', component: QrCodeGeneratorComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
