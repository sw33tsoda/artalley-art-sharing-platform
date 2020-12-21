const { createSlice } = require("@reduxjs/toolkit");

const community_announcementSlice = createSlice({
    name: 'community_announcement',
    initialState: {
        message: '',
        type:'',
    },
    reducers: {
        setAnnouncementMessage: (state,action) => {
            const { message,type } = action.payload;
            state.message = message;
            state.type = type;
        },

        removeAnnouncementMessage: (state) => {
            state.message = '';
        }
    }
});

const { reducer:community_announcementReducer, actions } = community_announcementSlice;
export const { setAnnouncementMessage,removeAnnouncementMessage } = actions;
export { community_announcementReducer };