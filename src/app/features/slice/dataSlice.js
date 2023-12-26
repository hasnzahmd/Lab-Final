import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        rockets: [],
        missions: []
    },
    reducers: {
        addRockets: (state,action)=>{
            state.rockets= [...state.rockets, action.payload]
        },
        addMissions: (state,action)=>{
            state.missions= [...state.missions, action.payload]
        }
    }
})

export const { addRockets,addMissions} = dataSlice.actions;
export default dataSlice.reducer;