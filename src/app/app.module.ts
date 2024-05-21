import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProductFinderAppComponent } from './product-finder-app/product-finder-app.component';

// imported by me
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatbotAppComponent } from './chatbot-app/chatbot-app.component';
import { ChatbotMessageComponent } from './chatbot-message/chatbot-message.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TypingIndicatorComponent } from './typing-indicator/typing-indicator.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AppSelectionComponent } from './app-selection/app-selection.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductFinderAppComponent,
    ChatbotAppComponent,
    ChatbotMessageComponent,
    QrCodeGeneratorComponent,
    StarRatingComponent,
    ProductDetailsComponent,
    TypingIndicatorComponent,
    TodoAppComponent,
    ShoppingCartComponent,
    AppSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
