import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'geo-look';

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: environment.API_KEY,
      authDomain: environment.AUTH_DOMAIN,
      databaseURL: environment.DATABASE_URL,
      projectId: environment.PROJECT_ID,
      storageBucket: environment.STORAGE_BUCKET,
      messagingSenderId: environment.MESSAGEIN_SENDER_ID,
      appId: environment.APP_ID,
      measurementId: environment.MEASUREMENT_ID,
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
