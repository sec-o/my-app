import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ProductFinderAppComponent } from './product-finder-app/product-finder-app.component';

// imported by me
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatbotAppComponent } from './chatbot-app/chatbot-app.component';
import { ChatbotMessageComponent } from './chatbot-message/chatbot-message.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TypingIndicatorComponent } from './typing-indicator/typing-indicator.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
