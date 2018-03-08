import {Component, OnInit} from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private af: AngularFireDatabase) {
    }

    objectDataObserverble: FirebaseObjectObservable<any>;
    listDataObserverble: FirebaseListObservable<any[]>;


    ngOnInit() {

      console.log('ngOnInit Initialized...');

      this.objectDataObserverble = this.af.object('/objectData');
      this.listDataObserverble = this.af.list('/listData');
    }
}


