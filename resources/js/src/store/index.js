import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { admin_announcerReducer } from './admin/announcer';
import admin_usersReducer from './admin/users';
import authReducer from './auth';

const rootReducer = combineReducers({
    auth: authReducer,
    admin_users: admin_usersReducer,
    admin_announcer: admin_announcerReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;