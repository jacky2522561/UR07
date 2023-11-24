import {configureStore,createSlice,createAction} from '@reduxjs/toolkit';

const reset = createAction('app/reset');
const movieSlice = createSlice({
    name:'movie',
    initialState:[],
    reducers:{
        addMovie:(state,action)=>{
            state.push(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(reset,(state,action)=>{
            return [];
        })
    }
});

const songSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        addSong:(state,action)=>{
            state.push(action.payload);
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(reset,(state,action)=>{
            return [];
        })
    }
})


const store = configureStore({
    reducer:{
        movies: movieSlice.reducer,
        songs: songSlice.reducer
    }
});

export default store;
export const {addMovie} = movieSlice.actions;
export const {addSong} = songSlice.actions;
export {reset};