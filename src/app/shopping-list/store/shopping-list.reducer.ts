import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

import * as ShoppingAction from './shopping-list.action';
import { ShoppingListAction } from './shopping-list.action';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListAction) {
  switch (action.type) {
    case ShoppingAction.ADD_INGREDIENT:
      return {
        ...initialState,
        ingredients: [... initialState.ingredients, action]
      }
  }
}
