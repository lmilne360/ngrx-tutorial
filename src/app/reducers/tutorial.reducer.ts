import * as TutorialActions from './../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';



const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'https://www.google.com'
};

export function reducer(state: Tutorial[]  = [initialState], action: TutorialActions.Actions ) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL: {
      return [...state, action.payload];
    }
    case TutorialActions.REMOVE_TUTORIAL:
      // state.filter((tutorial, index) => index !== action.payload);
      return [...state.filter((tutorial, index) => index !== action.payload)];
    default: {
      return state;
    }
  }
}
