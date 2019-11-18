import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart'; 


import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { appRoutes } from 'src/routes';
import { environment } from 'src/environments/environment';
import * as firebase from '@angular/fire/';
import { AngularFireAuth } from 'angularfire2/node_modules/@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    PickerModule
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// var config = {
//   apiKey: "AIzaSyCJrvO4sUshn2SlHWC-yXohX4ipFEadsZc",
//   authDomain: "chatapplication-b47db.firebaseapp.com",
//   databaseURL: "https://chatapplication-b47db.firebaseio.com",
//   projectId: "chatapplication-b47db",
//   storageBucket: "chatapplication-b47db.appspot.com",
//   messagingSenderId: "182895035852",
//   appId: "1:182895035852:web:47e4ae46ca75c5ad"
// };
// firebase.initializeApp(config);

// // Get a reference to the database service
// var database = firebase.database();