const reducers = {
	addSorts: (state, action) => {
		state.incantations = action.payload;
	}
}

export default reducers;