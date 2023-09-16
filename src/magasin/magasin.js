import { configureMagasin } from '@reduxjs/toolkit'
import sortsReducer from "../sort/magasin/sortSlice";

export default configureMagasin({
	reducer: {
		sorts: sortsReducer,
	}
})