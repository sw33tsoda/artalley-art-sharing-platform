import { createSlice } from '@reduxjs/toolkit';

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticatedUser:{},
        sessionRefreshTimes:0,
    },
    reducers: {
        setAuthenticatedUser: (state,action) => {
            state.authenticatedUser = action.payload;
            localStorage.setItem('authenticatedUserToken',state.authenticatedUser.api_token);
        },
        authRefresh: (state,action) => {
            state.sessionRefreshTimes += 1;
        },
        removeAuthenticatedUser: (state,action) => {
            state.authenticatedUser = {};
            localStorage.removeItem('authenticatedUserToken');
        }
    }
});

const { reducer:authReducer, actions } = authSlice;
export const { setAuthenticatedUser,removeAuthenticatedUser,authRefresh } = actions; 
export default authReducer;