import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
//setup firebase ver 5.0
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule, AngularFireDatabaseProvider} from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular5-ssr-firebase'}),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "***********************",
      authDomain: "***********************",
      databaseURL: "***********************",
      projectId: "***********************",
      storageBucket: "***********************",
      messagingSenderId: "***********************",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.warn('Please add your own Firebase project configuration in app.module.ts');
  }
}

