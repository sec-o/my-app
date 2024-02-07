import { Component, Input } from '@angular/core';

@Component({
  selector: 'typing-indicator',
  templateUrl: './typing-indicator.component.html',
  styleUrls: ['./typing-indicator.component.css'],
})
export class TypingIndicatorComponent {
  @Input() chatbotIsTyping: boolean = false;
}
