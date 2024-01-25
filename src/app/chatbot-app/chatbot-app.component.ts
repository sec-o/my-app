import { Component } from '@angular/core';

@Component({
  selector: 'chatbot-app',
  templateUrl: './chatbot-app.component.html',
  styleUrls: ['./chatbot-app.component.css'],
})
export class ChatbotAppComponent {
  messages: { text: string; fromUser: boolean; timestamp: Date }[] = [];
  userMessage: string = '';

  constructor() {
    // Add a welcome message when the component is initialized
    this.addWelcomeMessage();
  }

  sendMessage() {
    if (this.userMessage) {
      const timestamp = new Date();
      this.messages.push({ text: this.userMessage, fromUser: true, timestamp });
      // Your logic for processing user message and generating bot response
      // ...

      // For demonstration purposes, add a mock bot response
      this.messages.push({
        text: 'This is a mock response',
        fromUser: false,
        timestamp,
      });
      this.userMessage = '';
    }
  }

  resetConversation() {
    this.messages = [];
    // Add a welcome message when the conversation is reset
    this.addWelcomeMessage();
  }

  private addWelcomeMessage() {
    const welcomeMessage = 'Welcome! How can I assist you today?';
    const timestamp = new Date();
    this.messages.push({ text: welcomeMessage, fromUser: false, timestamp });
  }
}
