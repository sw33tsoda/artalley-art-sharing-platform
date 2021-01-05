const { createSlice } = require("@reduxjs/toolkit");

const community_filterSlice = createSlice({
    name: 'community_filter',
    initialState: {
        dimensions:{
            list:[],
            selected:null,
        },
        channels:{
            list:[],
            selected:null,
        }
    },
    reducers: {
        setDimensionsList: (state,action) => {
            state.dimensions.list = action.payload;
        },
        selectDimension: (state,action) => {
            state.dimensions.selected = action.payload;
        },

        setChannelsList: (state,action) => {
            state.channels.list = action.payload;
        },

        selectChannel: (state,action) => {
            state.channels.selected = action.payload;
        }
    }
});

const { reducer:community_filterReducer, actions } = community_filterSlice;
export const { setDimensionsList,selectDimension,setChannelsList,selectChannel } = actions;
export { community_filterReducer };