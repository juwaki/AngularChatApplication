import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';
import { ChatMessage } from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  user: any;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  var1$;
  var2$;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
  ) {
    // this.afAuth.authState.subscribe(auth => {
    //   if (auth != undefined && auth != null) {
    //     this.user = auth;
    //   }
    // });
    //afList.push({ name: 'item' });
    
  }

  sendMessage(msg: string) {
    const timeStamp = this.getTimeStamp();
    //const email = this.user.email;
    const email = 'test@example.com';

    this.chatMessages = this.getMessages();
    var message = {
      
      message: msg,
      //timeSent: timeStamp,
      //userName: this.userName,
      userName: 'test-user',
      email: email
            
    };

    const item = this.db.list('/messages');

    item.push(message);
    // this.chatMessages.push({
    //   message: msg,
    //   //timeSent: timeStamp,
    //   //userName: this.userName,
    //   userName: 'test-user',
    //   email: email
    // });
    
    console.log('Called sendMessage()!')

  }



  getMessages(): AngularFireList<ChatMessage> {
    // query to create our message feed binding
    const itemsRef: AngularFireList<ChatMessage>=this.db.list('/messages'); 
    this.var1$ = itemsRef.snapshotChanges();
    this.var2$ = itemsRef.valueChanges();

    return this.var2$;
     
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + now.getUTCMinutes() + ':' + now.getUTCSeconds();
    return (date + ' ' + time);
  }

}



