export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS': {
            return state.map((current) => {
               return current.city === action.items.city ? action.items : current;
            });
        }

        case 'ADD_ITEM': {
            state.push({city: action.item, data: {}});
            return state;
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