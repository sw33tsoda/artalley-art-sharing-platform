import { createSlice } from '@reduxjs/toolkit';

// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authenticatedUser:{},
    },
    reducers: {
        setAuthenticatedUser: (state,action) => {
            state.authenticatedUser = action.payload;
            localStorage.setItem('authenticatedUserToken',state.authenticatedUser.api_token);
        },
        removeAuthenticatedUser: (state,action) => {
            state.authenticatedUser = {};
            localStorage.removeItem('authenticatedUserToken');
        }
    }
});

const { reducer:authReducer, actions } = authSlice;
export const { setAuthenticatedUser,removeAuthenticatedUser } = actions; 
export default authReducer;