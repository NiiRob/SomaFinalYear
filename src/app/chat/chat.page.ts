import { Component, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(public chat: ChatService, public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
    .pipe(
      scan((acc, val) => acc.concat(val) )
      );
    }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';

    setTimeout(() => {
      this.content.scrollToBottom(200);
    }, 1000);
  }

  onLogout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }


}
