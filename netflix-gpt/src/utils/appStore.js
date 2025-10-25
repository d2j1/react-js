import userReducer from '../utils/userSlice.js';
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../utils/movieSlice.js';
import gptReducer from '../utils/GptSlice.js';
import configReducer from '../utils/configSlice.js';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptReducer,
        config: configReducer,
    }
});

export default appStore;