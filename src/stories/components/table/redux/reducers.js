import { SORT_ACTION, SELECT_ACTION } from './action-types';
import orderBy from 'lodash/orderBy';
import get from 'lodash/get';

function onSort(state, { payload: {index, direction} }) {
    return {
        ...state,
        rows: orderBy(
            state.rows,
            [e => get(e, `cells.${index}`)],
            [direction === 'up' ? 'asc' : 'desc']
        )
    }
}

function onSelect(state, { payload: {index, isSelected} }) {
    const selectedRow = state.rows[index];
    selectedRow.selected = isSelected;
    return {
        ...state,
        rows: [...state.rows]
    }
}

export const tableReducers = {
    [SORT_ACTION]: onSort,
    [SELECT_ACTION]: onSelect
}
