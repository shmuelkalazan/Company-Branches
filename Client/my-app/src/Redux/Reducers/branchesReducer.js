import produce from 'immer'
import createReducer from './reducerUtils'

const initialState = {
    branchesList: [],
    selectedRegion: 0,
    selectedCity: "",currentBranch: {},searchText: ""
}

export const Branches = {
    branchesList(state, action) {
        state.branchesList = action.payload;
    },
    selectedRegion(state, action) {
        state.selectedRegion = action.payload;
    },
    selectedCity(state, action) {
        state.selectedCity = action.payload;
    },
    updateCurrentBranch(state, action) {
        state.currentBranch = action.payload;
    },
    updateSelectedRegion(state, action) {
        state.selectedRegion = action.payload;
        state.selectedCity = "";
        state.searchText = ""
    },
    updateSelectedCity(state, action) {
        state.selectedCity = action.payload;
        state.searchText = ""
    },
    updateSearchText(state, action) {
        state.searchText = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, Branches), initialState)