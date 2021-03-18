const { createSlice } = require("@reduxjs/toolkit");

const admin_confirmationBoxSlice = createSlice({
    name: 'admin_confirmation_box',
    initialState: {
        toggle:false,
        title:'Thông báo',
        description:'Bạn có chắc chắn?',
        callback:null,
    },
    reducers: {
        showConfirmationBox: (state,{payload:{title,description,callback}}) => {
            state.toggle = true;
            state.title = title;
            state.description = description;
            state.callback = callback;
        },

        closeConfirmationBox: (state,payload) => {
            state.toggle = false;
            state.title = 'Thông báo';
            state.description = 'Bạn có chắc chắn?';
            state.callback = null;
        }
    }
});

const { reducer:admin_confirmationBoxReducer, actions } = admin_confirmationBoxSlice;
export const { showConfirmationBox,closeConfirmationBox } = actions;
export { admin_confirmationBoxReducer };