import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../models/chat-message.model';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';
 
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  //isOwnMessge: boolean;


  ngOnInit(chatMessage= this.chatMessage) {
    this.messageContent= this.chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userName = chatMessage.email;
    this.userEmail= chatMessage.userName;
  }

}
