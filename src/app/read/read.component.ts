import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TutorialActions from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
/*  This component shows how to read from ngrx store */
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
   }

  ngOnInit() {
  }

  removeTutorial(i: number) {

    console.log(`tutorial # ${i + 1} was selected to be removed`);
    this.store.dispatch(new TutorialActions.RemoveTutorial(i));
  }
}
