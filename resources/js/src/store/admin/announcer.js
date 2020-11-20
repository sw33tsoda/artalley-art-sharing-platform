const { createSlice } = require("@reduxjs/toolkit");

const admin_announcerSlice = createSlice({
    name: 'admin_announcer',
    initialState: {
        message: '',
    },
    reducers: {
        setAnnouncerMessage: (state,action) => {
            state.message = action.payload;
        },

        removeAnnouncerMessage: (state) => {
            state.message = '';
        }
    }
});

const { reducer:admin_announcerReducer, actions } = admin_announcerSlice;
export const { setAnnouncerMessage,removeAnnouncerMessage } = actions;
export { admin_announcerReducer };