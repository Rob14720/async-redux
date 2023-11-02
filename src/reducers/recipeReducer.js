import { FETCH_RECIPE_SUCCESS } from "../actions/recipeActions";

const initialState = {
    recipe: null,
};

const recipeReducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_RECIPE_SUCCESS:
        return {
            ...state,
            recipe: action.payload,
        };
        default:
            return state;
    }
};
export default recipeReducer;