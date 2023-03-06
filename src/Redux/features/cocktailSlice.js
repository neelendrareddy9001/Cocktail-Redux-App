import {createSlice, createAsynThunk} from '@reduxjs/toolkit';

export const fetchCocktails = createAsynThunk(
    "cocktaisl/fetchCocktails",
    async () => {
        return fetch("www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(
          (res) => res.json()  
        );
    }
);

const cocktailSlice = createSlice({
       name : "cocktails",
       initialState : {
        loading : false,
        cocktails : [],
        error : null,
        cocktail : [],
       },
       extraReducers : {
        [fetchCocktails.pending] : (state, action) => {
            state.loading = false;
        },
        [fetchCocktails.fullfilled] : (state, action) => {
            state.cocktails = action.payload.drink;
        },
        [fetchCocktails.rejected] : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
       },
});

export default cocktailSlice;