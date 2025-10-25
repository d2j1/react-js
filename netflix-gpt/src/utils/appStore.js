import userReducer from '../utils/userSlice.js';

import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../utils/movieSlice.js';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        
    }
});

export default appStore;