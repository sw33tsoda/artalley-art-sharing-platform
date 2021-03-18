import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { admin_announcerReducer } from './admin/announcer';
import { admin_confirmationBoxReducer } from './admin/confirmation_box';
import admin_usersReducer from './admin/users';
import authReducer from './auth';
import { community_announcementReducer } from './community/announcer';
import { community_filterReducer } from './community/filter';

const rootReducer = combineReducers({
    auth: authReducer,
    admin_users: admin_usersReducer,
    admin_announcer: admin_announcerReducer,
    admin_confirmation_box: admin_confirmationBoxReducer,
    community_announcement: community_announcementReducer,
    community_filter: community_filterReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;