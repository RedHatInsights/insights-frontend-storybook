import { SORT_ACTION, SELECT_ACTION, FILTER_ACTION } from './action-types';

export const sort = (index, direction) => ({
    type: SORT_ACTION,
    payload: {
        index,
        direction
    }
});

export const select = (index, isSelected) => ({
    type: SELECT_ACTION,
    payload: {
        index,
        isSelected
    }
});
