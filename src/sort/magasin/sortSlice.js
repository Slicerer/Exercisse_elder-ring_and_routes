import { createSlice } from "@reduxjs/toolkit"
import reducers from './sortReducers';

const sortSlice = createSlice({
	name: "incantations",
	initialState: {
		incantations: [],
	},
	reducers: reducers,
})

export const { addSorts } = sortSlice.actions;

export default sortSlice.reducer;