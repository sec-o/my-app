import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotAppComponent } from './chatbot-app.component';

describe('ChatbotAppComponent', () => {
  let component: ChatbotAppComponent;
  let fixture: ComponentFixture<ChatbotAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatbotAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatbotAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
