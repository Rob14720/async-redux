import axios from 'axios';

export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';

export const fetchRecipe =  (id, includeNutrition) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
             params: {
                includeNutrition,
                apiKey: '04fba51b91b44a81a14939cf56253a17'
             },   
            });

            dispatch({
                type: FETCH_RECIPE_SUCCESS,
                payload: response.data,
            });
        }  catch (error) {
            console.error('Problems fetching recipe:', error);
        }
    };
}