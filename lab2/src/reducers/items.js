export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS': {
            return state.map((current) => {
                return current.city === action.items.city ?
                    {
                        ...action.items,
                        isLoaded: true,
                        isErrored: false
                    }
                    : current;
            });
        }

        case 'ADD_ITEM': {
            state.push({city: action.item, data: {}, isLoaded: false, isErrored: false});
            return state;
        }

        case 'DELETE_ITEM': {
            let index = state.findIndex(current => current.city === action.city);
            var copy = state.slice();
            copy.splice(index, 1);
            return copy;
        }

        case 'ITEMS_HAS_ERRORED': {
            return state.map((current) => {
                return current.city === action.city ?
                    {
                        ...action.items,
                        isErrored: true
                    }
                    : current;
            });
        }

        default:
            return state;
    }
}

export function newCityValue(state = '', action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return '';
        }
        case 'CHANGE_INPUT': {
            return action.item
        }
        default:
            return state;
    }
}