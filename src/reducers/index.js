import { actions } from '../actions';

const reducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
        case actions.setFavorite:
            return {
                ...state,
                myList: [...state.myList.filter(item => item.id !== action.payload.id),
                    action.payload
                ]
            }
        case actions.deleteFavorite:
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case actions.loginRequest:
            return {
                ...state,
                user: action.payload,
            }
        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload,
            }
        case actions.registerRequest:
            return {
                ...state,
                user: action.payload,
            }
        case actions.getVideoSource:
            return {
                ...state,
                playing: state.trends.concat(state.originals).find(item => item.id === Number(action.payload)) || [],
                //playing: state.trends.find(item => item.id === Number(actions.payload)) ||
                //  state.originals.find(item => item.id === Number(actions.payload)) || []
            }
        case actions.searchRequest:
            return {
                ...state,
                searchItems: state.trends.concat(state.originals).find(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) || [],
            }
        default:
            return state;

    }
}
export default reducer;