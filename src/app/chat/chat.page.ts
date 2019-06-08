import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Message, ChatService } from './chat.service';
import { scan } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  messages: Observable<Message[]>;
  formValue: string;
  subscription: Subscription;
  constructor(public chat: ChatService, public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
      .pipe(
        scan((acc, val) => acc.concat(val))
      );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';

    // if (this.chat.conversation.value.length !== 0) {
    //   this.sentMessageAudio();
    //   setTimeout(() => {
    //     this.content.scrollToBottom(100);
    //   }, 500);
    // }

    this.subscription = this.chat.conversation.subscribe(
      (data) => {
        data.forEach(res => {
          if (res.sentBy === 'user') {
            this.sentMessageAudio();
            setTimeout(() => {
              this.content.scrollToBottom(100);
            }, 500);
          } else if (res.sentBy === 'bot') {
            this.receiveMessageAudio();
            setTimeout(() => {
              this.content.scrollToBottom(100);
            }, 500);
          }
        });
      }
    );
  }

  onLogout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  sentMessageAudio() {
    const audio = new Audio();
    audio.src = 'assets/sounds/go1.mp3';
    audio.load();
    audio.play();
  }

  receiveMessageAudio() {
    const audio = new Audio();
    audio.src = 'assets/sounds/come1.mp3';
    audio.load();
    audio.play();
  }

}
