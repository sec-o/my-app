import { Component, Input } from '@angular/core';

@Component({
  selector: 'chatbot-message',
  templateUrl: './chatbot-message.component.html',
  styleUrls: ['./chatbot-message.component.css'],
})
export class ChatbotMessageComponent {
  @Input() message: { text: string; fromUser: boolean; timestamp: Date } = {
    text: '',
    fromUser: false,
    timestamp: new Date(),
  };
}
